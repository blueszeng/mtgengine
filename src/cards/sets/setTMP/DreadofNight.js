"use strict";
const Constants = require ("../../../Constants");
const DreadofNightBase = require("../set6ED/DreadofNight");

class DreadofNight extends DreadofNightBase {
  constructor (game) {
    super(game, "Dread of Night", "Tempest", "TMP");
  }
}

module.exports = DreadofNight;
