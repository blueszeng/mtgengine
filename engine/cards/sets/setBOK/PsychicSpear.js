"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PsychicSpear extends Card {
  constructor(game) {
    super(game, "Psychic Spear", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = PsychicSpear;
