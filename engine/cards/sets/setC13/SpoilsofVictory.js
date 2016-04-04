"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpoilsofVictory extends Card {
  constructor(game) {
    super(game, "Spoils of Victory", "Commander 2013 Edition", "C13");
  }
}

module.exports = SpoilsofVictory;
