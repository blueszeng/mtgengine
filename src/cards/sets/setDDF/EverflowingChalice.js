"use strict";
const Constants = require ("../../../Constants");
const EverflowingChaliceBase = require("../setARC/EverflowingChalice");

class EverflowingChalice extends EverflowingChaliceBase {
  constructor (game) {
    super(game, "Everflowing Chalice", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = EverflowingChalice;
