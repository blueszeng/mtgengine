"use strict";
const Constants = require ("../../../Constants");
const StrandsofNightBase = require("../set6ED/StrandsofNight");

class StrandsofNight extends StrandsofNightBase {
  constructor (game) {
    super(game, "Strands of Night", "Seventh Edition", "7ED");
  }
}

module.exports = StrandsofNight;
