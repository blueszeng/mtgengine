"use strict";
const Constants = require ("../../../Constants");
const PeelfromRealityBase = require("../setAVR/PeelfromReality");

class PeelfromReality extends PeelfromRealityBase {
  constructor (game) {
    super(game, "Peel from Reality", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = PeelfromReality;
