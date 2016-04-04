"use strict";
const Constants = require ("../../../Constants");
const SimicGrowthChamberBase = require("../setC15/SimicGrowthChamber");

class SimicGrowthChamber extends SimicGrowthChamberBase {
  constructor(game) {
    super(game, "Simic Growth Chamber", "Dissension", "DIS");
  }
}

module.exports = SimicGrowthChamber;
