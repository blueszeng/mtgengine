"use strict";
const Constants = require ("../../../Constants");
const ChainLightningBase = require("../setLEG/ChainLightning");

class ChainLightning extends ChainLightningBase {
  constructor (game) {
    super(game, "Chain Lightning", "Masters Edition III", "ME3");
  }
}

module.exports = ChainLightning;
