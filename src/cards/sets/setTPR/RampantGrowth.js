"use strict";
const Constants = require ("../../../Constants");
const RampantGrowthBase = require("../setBTD/RampantGrowth");

class RampantGrowth extends RampantGrowthBase {
  constructor (game) {
    super(game, "Rampant Growth", "Tempest Remastered", "TPR");
  }
}

module.exports = RampantGrowth;
