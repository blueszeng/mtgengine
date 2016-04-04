"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WindsofRathBase = require("../setDDL/WindsofRath.js");

class WindsofRath extends WindsofRathBase {
  constructor(game) {
    super(game, "Winds of Rath", "Vintage Masters", "VMA");
  }
}

module.exports = WindsofRath;
