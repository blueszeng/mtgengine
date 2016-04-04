"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GauntletofMightBase = require("../setCED/GauntletofMight.js");

class GauntletofMight extends GauntletofMightBase {
  constructor(game) {
    super(game, "Gauntlet of Might", "International Collector's Edition", "CEI");
  }
}

module.exports = GauntletofMight;
