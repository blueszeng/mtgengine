"use strict";
const Constants = require ("../../../Constants");
const SpiritShackleBase = require("../set4ED/SpiritShackle");

class SpiritShackle extends SpiritShackleBase {
  constructor(game) {
    super(game, "Spirit Shackle", "Legends", "LEG");
  }
}

module.exports = SpiritShackle;
