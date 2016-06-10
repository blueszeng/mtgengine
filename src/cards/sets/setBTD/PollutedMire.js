"use strict";
const Constants = require ("../../../Constants");
const PollutedMireBase = require("../setATH/PollutedMire");

class PollutedMire extends PollutedMireBase {
  constructor (game) {
    super(game, "Polluted Mire", "Beatdown Box Set", "BTD");
  }
}

module.exports = PollutedMire;
