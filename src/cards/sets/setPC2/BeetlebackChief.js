"use strict";
const Constants = require ("../../../Constants");
const BeetlebackChiefBase = require("../setC14/BeetlebackChief");

class BeetlebackChief extends BeetlebackChiefBase {
  constructor (game) {
    super(game, "Beetleback Chief", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = BeetlebackChief;
