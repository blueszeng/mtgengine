"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StalkingStonesBase = require("../setDDF/StalkingStones.js");

class StalkingStones extends StalkingStonesBase {
  constructor(game) {
    super(game, "Stalking Stones", "Tempest", "TMP");
  }
}

module.exports = StalkingStones;
