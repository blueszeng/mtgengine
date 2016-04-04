"use strict";
const Constants = require ("../../../Constants");
const PredatorFlagshipBase = require("../setC14/PredatorFlagship");

class PredatorFlagship extends PredatorFlagshipBase {
  constructor(game) {
    super(game, "Predator, Flagship", "Nemesis", "NMS");
  }
}

module.exports = PredatorFlagship;
