"use strict";
const Constants = require ("../../../Constants");
const GaeasLiegeBase = require("../setCED/GaeasLiege");

class GaeasLiege extends GaeasLiegeBase {
  constructor (game) {
    super(game, "Gaea's Liege", "Unlimited Edition", "2ED");
  }
}

module.exports = GaeasLiege;
