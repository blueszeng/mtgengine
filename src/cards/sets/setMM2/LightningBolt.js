"use strict";
const Constants = require ("../../../Constants");
const LightningBoltBase = require("../setATH/LightningBolt");

class LightningBolt extends LightningBoltBase {
  constructor (game) {
    super(game, "Lightning Bolt", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = LightningBolt;
