"use strict";
const Constants = require ("../../../Constants");
const TropicalIslandBase = require("../setCED/TropicalIsland");

class TropicalIsland extends TropicalIslandBase {
  constructor (game) {
    super(game, "Tropical Island", "Masters Edition III", "ME3");
  }
}

module.exports = TropicalIsland;
