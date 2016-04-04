"use strict";
const Constants = require ("../../../Constants");
const SunTitanBase = require("../setC14/SunTitan");

class SunTitan extends SunTitanBase {
  constructor(game) {
    super(game, "Sun Titan", "Prerelease Events", "pPRE");
  }
}

module.exports = SunTitan;
