"use strict";
const Constants = require ("../../../Constants");
const WinterOrbBase = require("../setCED/WinterOrb");

class WinterOrb extends WinterOrbBase {
  constructor (game) {
    super(game, "Winter Orb", "Unlimited Edition", "2ED");
  }
}

module.exports = WinterOrb;
