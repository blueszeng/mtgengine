"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HarmonizeBase = require("../setARC/Harmonize.js");

class Harmonize extends HarmonizeBase {
  constructor(game) {
    super(game, "Harmonize", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = Harmonize;
