"use strict";
const Constants = require ("../../../Constants");
const SynodCenturionBase = require("../setARC/SynodCenturion");

class SynodCenturion extends SynodCenturionBase {
  constructor (game) {
    super(game, "Synod Centurion", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = SynodCenturion;
