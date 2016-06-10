"use strict";
const Constants = require ("../../../Constants");
const WallofWaterBase = require("../setCED/WallofWater");

class WallofWater extends WallofWaterBase {
  constructor (game) {
    super(game, "Wall of Water", "Fourth Edition", "4ED");
  }
}

module.exports = WallofWater;
