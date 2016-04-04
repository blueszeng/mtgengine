"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WarrenInstigator extends Card {
  constructor(game) {
    super(game, "Warren Instigator", "Zendikar", "ZEN");
  }
}

module.exports = WarrenInstigator;
