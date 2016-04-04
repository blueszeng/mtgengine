"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinArsonist extends Card {
  constructor(game) {
    super(game, "Goblin Arsonist", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = GoblinArsonist;
