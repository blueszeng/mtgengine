"use strict";
const Constants = require ("../../../Constants");
const DoublingSeasonBase = require("../setpJGP/DoublingSeason");

class DoublingSeason extends DoublingSeasonBase {
  constructor (game) {
    super(game, "Doubling Season", "Modern Masters", "MMA");
  }
}

module.exports = DoublingSeason;
