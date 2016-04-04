"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ExperimentOneBase = require("../setC15/ExperimentOne.js");

class ExperimentOne extends ExperimentOneBase {
  constructor(game) {
    super(game, "Experiment One", "Gatecrash", "GTC");
  }
}

module.exports = ExperimentOne;
