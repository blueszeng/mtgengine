"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FaultLine extends Card {
  constructor(game) {
    super(game, "Fault Line", "Urza's Saga", "USG");
  }
}

module.exports = FaultLine;
