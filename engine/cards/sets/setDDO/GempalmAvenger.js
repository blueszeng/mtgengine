"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GempalmAvenger extends Card {
  constructor(game) {
    super(game, "Gempalm Avenger", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = GempalmAvenger;
