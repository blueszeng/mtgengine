"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StripMineBase = require("../setATH/StripMine.js");

class StripMine extends StripMineBase {
  constructor(game) {
    super(game, "Strip Mine", "Masters Edition IV", "ME4");
  }
}

module.exports = StripMine;
