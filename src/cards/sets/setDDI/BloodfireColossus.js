"use strict";
const Constants = require ("../../../Constants");
const BloodfireColossusBase = require("../setAPC/BloodfireColossus");

class BloodfireColossus extends BloodfireColossusBase {
  constructor (game) {
    super(game, "Bloodfire Colossus", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = BloodfireColossus;
