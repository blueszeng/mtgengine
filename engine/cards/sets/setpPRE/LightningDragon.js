"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LightningDragon extends Card {
  constructor(game) {
    super(game, "Lightning Dragon", "Prerelease Events", "pPRE");
  }
}

module.exports = LightningDragon;
