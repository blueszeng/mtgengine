"use strict";
const Constants = require ("../../../Constants");
const GauntletofMightBase = require("../setCED/GauntletofMight");

class GauntletofMight extends GauntletofMightBase {
  constructor (game) {
    super(game, "Gauntlet of Might", "Limited Edition Beta", "LEB");
  }
}

module.exports = GauntletofMight;
