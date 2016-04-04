"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EnergyStorm extends Card {
  constructor(game) {
    super(game, "Energy Storm", "Ice Age", "ICE");
  }
}

module.exports = EnergyStorm;
