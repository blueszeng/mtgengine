"use strict";
const Constants = require ("../../../Constants");
const BloodMoonBase = require("../setCHR/BloodMoon");

class BloodMoon extends BloodMoonBase {
  constructor (game) {
    super(game, "Blood Moon", "Eighth Edition", "8ED");
  }
}

module.exports = BloodMoon;
