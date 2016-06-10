"use strict";
const Constants = require ("../../../Constants");
const RadjanSpiritBase = require("../set6ED/RadjanSpirit");

class RadjanSpirit extends RadjanSpiritBase {
  constructor (game) {
    super(game, "Radjan Spirit", "Legends", "LEG");
  }
}

module.exports = RadjanSpirit;
