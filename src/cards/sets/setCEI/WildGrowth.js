"use strict";
const Constants = require ("../../../Constants");
const WildGrowthBase = require("../setBTD/WildGrowth");

class WildGrowth extends WildGrowthBase {
  constructor (game) {
    super(game, "Wild Growth", "International Collector's Edition", "CEI");
  }
}

module.exports = WildGrowth;
