"use strict";
const Constants = require ("../../../Constants");
const SeaDrakeBase = require("../setME2/SeaDrake");

class SeaDrake extends SeaDrakeBase {
  constructor (game) {
    super(game, "Sea Drake", "Vintage Masters", "VMA");
  }
}

module.exports = SeaDrake;
