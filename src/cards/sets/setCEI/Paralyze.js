"use strict";
const Constants = require ("../../../Constants");
const ParalyzeBase = require("../setCED/Paralyze");

class Paralyze extends ParalyzeBase {
  constructor (game) {
    super(game, "Paralyze", "International Collector's Edition", "CEI");
  }
}

module.exports = Paralyze;
