"use strict";
const Constants = require ("../../../Constants");
const SunTitanBase = require("../setC14/SunTitan");

class SunTitan extends SunTitanBase {
  constructor (game) {
    super(game, "Sun Titan", "Magic 2011", "M11");
  }
}

module.exports = SunTitan;
