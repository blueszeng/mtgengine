"use strict";
const Constants = require ("../../../Constants");
const SengirVampireBase = require("../setBRB/SengirVampire");

class SengirVampire extends SengirVampireBase {
  constructor (game) {
    super(game, "Sengir Vampire", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = SengirVampire;
