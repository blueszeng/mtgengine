"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LightningBoltBase = require("../setATH/LightningBolt.js");

class LightningBolt extends LightningBoltBase {
  constructor(game) {
    super(game, "Lightning Bolt", "Revised Edition", "3ED");
  }
}

module.exports = LightningBolt;
