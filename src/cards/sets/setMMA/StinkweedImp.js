"use strict";
const Constants = require ("../../../Constants");
const StinkweedImpBase = require("../setDD3_DVD/StinkweedImp");

class StinkweedImp extends StinkweedImpBase {
  constructor (game) {
    super(game, "Stinkweed Imp", "Modern Masters", "MMA");
  }
}

module.exports = StinkweedImp;
