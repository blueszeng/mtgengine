"use strict";
const Game = require("./src/Game");
const Constants = require("./src/Constants");
const Inputs = require("./src/Inputs");
const Deck = require("./src/Deck");

// node-debug main.js

function testGame () {
  try {
    let game = new Game.Game(2, 0, false,
      [new Deck.Deck(new Deck.FSLoader("decklists/monored.txt")),
       new Deck.Deck(new Deck.FSLoader("decklists/monored.txt"))]
      );

    game.ready().then(() => {
      let p0 = game._players[0];
      let p1 = game._players[1];

      while (true) {
        if (game.isWaitingForInput()) {
          game.log("################################");
          game.log("## Need something to do at " + game.getStepName(game._currentStep));
          let player = game._hasPriority;
          if (player === game._activePlayer) {
            if (game._currentStep === Constants.steps.MAIN1 ||
              game._currentStep === Constants.steps.MAIN2) {
              if (game._stack.empty()) {
                if (player._landPlaysRemaining > 0) {
                  let cardsInHand = player._hand.objects;
                  for (let i = 0; i < cardsInHand.length; i++) {
                    let cardInHand = cardsInHand[i];
                    if (cardInHand.hasType(Constants.cardTypes.LAND)) {
                      game.log("## Playing land");
                      player.addInput(Inputs.PLAY_LAND, {landCard: cardInHand});
                      break;
                    }
                  }
                } else {
                  let cardsInHand = player._hand.objects;
                  for (let i = 0; i < cardsInHand.length; i++) {
                    let cardInHand = cardsInHand[i];
                    if (cardInHand.hasType(Constants.cardTypes.CREATURE)) {
                      if (game._battlefield.getPermanentsControlledByPlayer(player).length > 1) {
                        game.log("## Casting spell");

                        player.addInput(Inputs.ACTIVATE_ABILITY, {
                          object: game._battlefield.getPermanentsControlledByPlayer(player)[0],
                          abilityIndex: 0
                        });
                        player.addInput(Inputs.ACTIVATE_ABILITY, {
                          object: game._battlefield.getPermanentsControlledByPlayer(player)[1],
                          abilityIndex: 0
                        });
                        player.addInput(Inputs.CAST_SPELL, {
                          card: cardInHand,
                          targets: [game.getNextPlayer(player)]
                        });
                        break;
                      }
                    }
                  }
                  game.log("## ...and passing");
                  player.addInput(Inputs.PASS_PRIORITY, {});
                }
              }
            } else if (game._currentStep === Constants.steps.DECLARE_ATTACKERS &&
                       game._waitingForChoice) {
              let permanents = game._battlefield.getPermanentsControlledByPlayer(player);
              game.log("## Declaring attackers");
              for (let permanent of permanents) {
                if (permanent.isCreature()) {
                  permanent.attacking = game.getNextPlayer(player);
                }
              }
              game.log("## Finishing choice");
              player.addInput(Inputs.FINISH_CHOICE, {});
            }
          } else {
            if (game._currentStep === Constants.steps.DECLARE_BLOCKERS &&
                       game._waitingForChoice) {
              game.log("## Declaring blockers");
              game.log("## Finishing choice");
              player.addInput(Inputs.FINISH_CHOICE, {});
            }
          }

          if (!player.hasUnprocessedInputs()) {
            game.log("## Nothing to do, passing at " + game.getStepName(game._currentStep));
            player.addInput(Inputs.PASS_PRIORITY, {});
          }
        } else if (!game.isWaitingForInput()) {
          game.tick();
        }
      }
    });
  } catch (e) {
    if (e instanceof Game.GameOver) {
      console.log("Game over.");
    } else {
      throw e;
    }
  }
}

testGame();
