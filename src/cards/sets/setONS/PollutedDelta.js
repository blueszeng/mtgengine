"use strict";
const Constants = require ("../../../Constants");
const PollutedDeltaBase = require("../setpJGP/PollutedDelta");

class PollutedDelta extends PollutedDeltaBase {
  constructor (game) {
    super(game, "Polluted Delta", "Onslaught", "ONS");
  }
}

module.exports = PollutedDelta;
