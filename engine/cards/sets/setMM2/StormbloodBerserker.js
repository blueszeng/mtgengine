"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StormbloodBerserkerBase = require("../setM12/StormbloodBerserker.js");

class StormbloodBerserker extends StormbloodBerserkerBase {
  constructor(game) {
    super(game, "Stormblood Berserker", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = StormbloodBerserker;
