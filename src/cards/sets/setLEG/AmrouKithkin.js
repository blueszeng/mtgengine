"use strict";
const Constants = require ("../../../Constants");
const AmrouKithkinBase = require("../set4ED/AmrouKithkin");

class AmrouKithkin extends AmrouKithkinBase {
  constructor (game) {
    super(game, "Amrou Kithkin", "Legends", "LEG");
  }
}

module.exports = AmrouKithkin;
