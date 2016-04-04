"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VolcanicHammerBase = require("../set8ED/VolcanicHammer.js");

class VolcanicHammer extends VolcanicHammerBase {
  constructor(game) {
    super(game, "Volcanic Hammer", "Super Series", "pSUS");
  }
}

module.exports = VolcanicHammer;
