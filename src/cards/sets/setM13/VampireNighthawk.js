"use strict";
const Constants = require ("../../../Constants");
const VampireNighthawkBase = require("../setC13/VampireNighthawk");

class VampireNighthawk extends VampireNighthawkBase {
  constructor (game) {
    super(game, "Vampire Nighthawk", "Magic 2013", "M13");
  }
}

module.exports = VampireNighthawk;
