"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StormfrontPegasusBase = require("../setM10/StormfrontPegasus.js");

class StormfrontPegasus extends StormfrontPegasusBase {
  constructor(game) {
    super(game, "Stormfront Pegasus", "Magic 2011", "M11");
  }
}

module.exports = StormfrontPegasus;
