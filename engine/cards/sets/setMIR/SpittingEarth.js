"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpittingEarthBase = require("../set6ED/SpittingEarth.js");

class SpittingEarth extends SpittingEarthBase {
  constructor(game) {
    super(game, "Spitting Earth", "Mirage", "MIR");
  }
}

module.exports = SpittingEarth;
