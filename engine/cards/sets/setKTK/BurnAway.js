"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BurnAway extends Card {
  constructor(game) {
    super(game, "Burn Away", "Khans of Tarkir", "KTK");
  }
}

module.exports = BurnAway;
