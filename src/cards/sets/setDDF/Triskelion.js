"use strict";
const Constants = require ("../../../Constants");
const TriskelionBase = require("../setATQ/Triskelion");

class Triskelion extends TriskelionBase {
  constructor (game) {
    super(game, "Triskelion", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = Triskelion;
