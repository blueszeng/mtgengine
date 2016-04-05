"use strict";
const Constants = require ("../../../Constants");
const ChainLightningBase = require("../setLEG/ChainLightning");

class ChainLightning extends ChainLightningBase {
  constructor(game) {
    super(game, "Chain Lightning", "Premium Deck Series: Fire and Lightning", "PD2");
  }
}

module.exports = ChainLightning;
