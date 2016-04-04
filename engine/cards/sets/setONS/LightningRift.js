"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LightningRiftBase = require("../setpFNM/LightningRift.js");

class LightningRift extends LightningRiftBase {
  constructor(game) {
    super(game, "Lightning Rift", "Onslaught", "ONS");
  }
}

module.exports = LightningRift;
