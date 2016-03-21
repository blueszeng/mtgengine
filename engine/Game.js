"use strict";
var Player = require("./Player");
var Constants = require("./Constants");
var GameActions = require("./GameActions");
var Inputs = require("./Inputs");
var Outputs = require("./Outputs");
var _ = require("underscore");
var Battlefield = require("./zones/Battlefield");
var Stack = require("./zones/Stack");

class GameOver {
	constructor (winner) {
		this.winner = winner;
	}
}

class Game {
	constructor (numberOfPlayers, startingPlayerIndex) {
		this._turnNumber = 0;
		this._players = [];
		this._currentStep = -1;
		this._hasPriority = null;
		this._activePlayer = null;
		this._battlefield = new Battlefield(this);
		this._stack = new Stack(this);
		this._guidCounters = {};
		this._outputs = [];

		this._actionListeners = {};

		for (var i = 0; i < numberOfPlayers; i++) {
			var player = new Player(this);
			this._players.push(player);
		}

		this._activePlayer = this._players[startingPlayerIndex];

		this.log(">>>>>>>>>>>>>> GAME STARTING <<<<<<<<<<<<<<")
		this._players.forEach(player => {
			player.onNewTurn(player === this._activePlayer);
		});
		this.advanceToNextStep();
	}

	log (str) {
		console.log(str);
	}

	logCurrentGameTime () {
		this.log("== It is now the " + Constants.stepNames[this._currentStep] + " step ==");
	}

	getGuid (prefix) {
		prefix = prefix || "o";
		prefix += "_"
		if (!this._guidCounters[prefix]) {
			this._guidCounters[prefix] = 0;
		}

		return prefix + String(this._guidCounters[prefix]++);
	}

	resetProrityPassers () {
		this._priorityPassers = [];
	}

	passPriority (player) {
		this._priorityPassers.push(player._guid);

		var allPassed = true;
		this._players.forEach(player => {
			if (this._priorityPassers.indexOf(player._guid) === -1) {
				allPassed = false;
			}
		});

		if (allPassed) {
			this.handleAllPassed();
		} else {
			this.givePriorityToNextPlayer();
		}
	}

	handleAllPassed () {
		this.log("All players passed priority");

		if (this._stack.empty()) {
			this.advanceToNextStep();
		} else {
			this._stack.resolveTopObject();
		}
	}

	advanceToNextStep () {
		this.resetProrityPassers();
		this._players.forEach(player => {
			player.emptyManaPool();
		});
		if (this._currentStep < Constants.steps.CLEANUP) {
			if (this._turnNumber === 0 && this._currentStep === Constants.steps.UPKEEP) {
				this._currentStep = Constants.steps.MAIN1; // Skip draw step on first turn
			} else {
				this._currentStep++;
				if (this._currentStep === Constants.steps.FIRST_COMBAT_DAMAGE) {
					// FIXME: Handle first strike better
					this._currentStep++;
				}
			}
		} else {
			this._turnNumber++;
			this.log("\n>>>>>>>>>>>>>> TURN " + this._turnNumber + " <<<<<<<<<<<<<<")
			this._activePlayer = this.getNextPlayer(this._activePlayer);
			this._currentStep = Constants.steps.UNTAP;
			this._players.forEach(player => {
				player.onNewTurn(player === this._activePlayer);
			});
		}
		this.setPriority(this._activePlayer);

		this.logCurrentGameTime();
		this.addOutput(Outputs.NEW_GAME_TIME, {
			turnNumber: this._turnNumber,
			stepNumber: this._currentStep,
			stepName: Constants.stepNames[this._currentStep],
			activePlayer: this._activePlayer
		});

		this.performTurnbasedActions();

		while (this.performStateBasedActions() > 0) {
		}

		if (!this.playersShouldReceivePriority(this._currentStep)) {
			this.advanceToNextStep();
		}
	}

	getNextPlayer (currentPlayer) {
		var isNext = false;
		var nextPlayer = null;
		this._players.forEach(player => {
			if (isNext && !nextPlayer) {
				nextPlayer = player;
			} else if (currentPlayer === player) {
				isNext = true;
			}
		});

		if (!nextPlayer) {
			nextPlayer = this._players[0];
		}

		return nextPlayer;
	}

	setPriority (player) {
		this._hasPriority = player;
		this.addOutput(Outputs.PRIORITY_CHANGED, {
			player: this._hasPriority
		});
	}

	givePriorityToNextPlayer () {
		var playerReceivingPriority = this.getNextPlayer(this._hasPriority);
		this.setPriority(playerReceivingPriority);
	}

	/**
	 * @returns {number} Number of actions taken
	 */
	performStateBasedActions () {

		var playersStillInGame = [];
		this._players.forEach(player => {
			if (!player.hasLost()) {
				playersStillInGame.push(player);
			}
		});

		if (playersStillInGame.length === 1) {
			this.handleGameWon(playersStillInGame[0]);
		} else if (playersStillInGame.length === 0) {
			this.handleGameDrawn();
		}

		var actionsPerformed = 0;
		actionsPerformed += this._battlefield.performStateBasedActions();

		return actionsPerformed;
	}

	performTurnbasedActions () {
		this._players.forEach(player => {
			player.performTurnbasedActions(
				this._currentStep,
				player === this._activePlayer);
		});

		if (this._currentStep === Constants.steps.CLEANUP) {
			while (this._battlefield.onCleanup() !== 0) {
			}
		}
	}

	handleGameWon (winner) {
		this.log(winner._guid + " has won the game!");
		throw new GameOver(winner);
	}

	handleGameDrawn () {
		this.log("The game is a draw!");
		throw new GameOver(null);
	}

	playersShouldReceivePriority (step) {
		if ([Constants.steps.UNTAP, Constants.steps.CLEANUP].indexOf(step) === -1) {
			return true;
		}

		return false;
	}

	tick () {
		if (this.playersShouldReceivePriority(this._currentStep)) {
			var input = this._hasPriority.getInput();
			if (input) {
				this.handleInput(this._hasPriority, input.input, input.data);
			}	
		}
	}

	isWaitingForInput () {
		if (this.playersShouldReceivePriority(this._currentStep)) {
			return !this._hasPriority.hasUnprocessedInputs();
		}

		return false;
	}

	/**
	 * Handles incoming input from players
	 */
	handleInput (player, input, data) {
		while (this.performStateBasedActions() > 0) {
		}

		this.log(">> " + player._guid + " " + input);
		switch(input) {
			case Inputs.PASS_PRIORITY:
				this.passPriority(player);
				break;
			case Inputs.CONCEDE:
				player.concede();
				while (this.performStateBasedActions() > 0) {
				}
				break;
			case Inputs.PLAY_LAND:
				player.putLandIntoPlay(data.landCard, true);
				break;

			case Inputs.ACTIVATE_ABILITY:
				player.activateAbility(data.object, data.abilityIndex);
				break;
			case Inputs.CAST_SPELL:
				player.castSpell(data.card, data.targets);
				break;

			case Inputs.ABORT_SPELLCAST:
				player.abortSpellCast(data.spell);
				break;
		}
	}

	registerActionListener (listener, gameAction) {
		if (!this._actionListeners[gameAction]) {
			this._actionListeners[gameAction] = [];
		}

		this._actionListeners[gameAction].push(listener);
	}

	/**
	 * Attempt to perform an action that affects the game state.
	 * This may or may not actually allow the action to happen, as we first check for
	 * any replacement effects to be applied.
	 * @returns {Boolean} True if the action may happen as intended, false if it will be replaced
	 */
	performGameAction (gameAction, data) {
		if (!this._actionListeners[gameAction]) {
			return true;
		}

		this._actionListeners[gameAction].forEach(listener => {
			listener.onGameAction(gameAction, data);
		});

		// FIXME: Handle multiple replacement effects properly

		return false
	}

	/**
	 * Sends output from the game to the visualization
	 */
	addOutput (output, data) {
		this._outputs.push({
			output: output,
			data: data
		});
	}

	getOutputs () {
		var ret = this._outputs;
		this._outputs = [];
		return ret;
	}
}

module.exports = {
	Game: Game,
	GameOver: GameOver
};