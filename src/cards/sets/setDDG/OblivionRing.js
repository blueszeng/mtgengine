"use strict";
const Constants = require ("../../../Constants");
const OblivionRingBase = require("../setARC/OblivionRing");

class OblivionRing extends OblivionRingBase {
  constructor (game) {
    super(game, "Oblivion Ring", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = OblivionRing;
