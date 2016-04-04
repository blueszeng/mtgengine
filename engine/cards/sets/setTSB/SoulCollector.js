"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SoulCollectorBase = require("../setpPRE/SoulCollector.js");

class SoulCollector extends SoulCollectorBase {
  constructor(game) {
    super(game, "Soul Collector", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = SoulCollector;
