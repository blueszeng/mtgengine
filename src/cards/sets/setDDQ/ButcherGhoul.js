"use strict";
const Constants = require ("../../../Constants");
const ButcherGhoulBase = require("../setAVR/ButcherGhoul");

class ButcherGhoul extends ButcherGhoulBase {
  constructor (game) {
    super(game, "Butcher Ghoul", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = ButcherGhoul;
