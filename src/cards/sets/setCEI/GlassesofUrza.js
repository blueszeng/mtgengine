"use strict";
const Constants = require ("../../../Constants");
const GlassesofUrzaBase = require("../set6ED/GlassesofUrza");

class GlassesofUrza extends GlassesofUrzaBase {
  constructor (game) {
    super(game, "Glasses of Urza", "International Collector's Edition", "CEI");
  }
}

module.exports = GlassesofUrza;
