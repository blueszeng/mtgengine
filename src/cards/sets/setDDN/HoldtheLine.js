"use strict";
const Constants = require ("../../../Constants");
const HoldtheLineBase = require("../setCHK/HoldtheLine");

class HoldtheLine extends HoldtheLineBase {
  constructor (game) {
    super(game, "Hold the Line", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = HoldtheLine;
