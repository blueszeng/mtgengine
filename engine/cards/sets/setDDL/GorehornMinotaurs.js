"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GorehornMinotaurs extends Card {
  constructor(game) {
    super(game, "Gorehorn Minotaurs", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = GorehornMinotaurs;
