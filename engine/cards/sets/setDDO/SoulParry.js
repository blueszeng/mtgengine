"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoulParry extends Card {
  constructor(game) {
    super(game, "Soul Parry", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = SoulParry;
