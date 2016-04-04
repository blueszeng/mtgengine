"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VolcanicFalloutBase = require("../setARC/VolcanicFallout.js");

class VolcanicFallout extends VolcanicFalloutBase {
  constructor(game) {
    super(game, "Volcanic Fallout", "Conflux", "CON");
  }
}

module.exports = VolcanicFallout;
