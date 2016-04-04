"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CoastalTower extends Card {
  constructor(game) {
    super(game, "Coastal Tower", "Eighth Edition", "8ED");
  }
}

module.exports = CoastalTower;
