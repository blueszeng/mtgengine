"use strict";
const Constants = require ("../../../Constants");
const UnholyStrengthBase = require("../setATH/UnholyStrength");

class UnholyStrength extends UnholyStrengthBase {
  constructor (game) {
    super(game, "Unholy Strength", "Collector's Edition", "CED");
  }
}

module.exports = UnholyStrength;
