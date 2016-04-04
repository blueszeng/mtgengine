"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StrandsofNightBase = require("../set6ED/StrandsofNight.js");

class StrandsofNight extends StrandsofNightBase {
  constructor(game) {
    super(game, "Strands of Night", "Seventh Edition", "7ED");
  }
}

module.exports = StrandsofNight;
