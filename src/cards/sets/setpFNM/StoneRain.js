"use strict";
const Constants = require ("../../../Constants");
const StoneRainBase = require("../setCHK/StoneRain");

class StoneRain extends StoneRainBase {
  constructor (game) {
    super(game, "Stone Rain", "Friday Night Magic", "pFNM");
  }
}

module.exports = StoneRain;
