"use strict";
const Constants = require ("../../../Constants");
const SeaSerpentBase = require("../setCED/SeaSerpent");

class SeaSerpent extends SeaSerpentBase {
  constructor (game) {
    super(game, "Sea Serpent", "International Collector's Edition", "CEI");
  }
}

module.exports = SeaSerpent;
