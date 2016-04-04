"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RealitySmasher extends Card {
  constructor(game) {
    super(game, "Reality Smasher", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = RealitySmasher;
