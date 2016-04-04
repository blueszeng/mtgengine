"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FlameSpiritBase = require("../set6ED/FlameSpirit.js");

class FlameSpirit extends FlameSpiritBase {
  constructor(game) {
    super(game, "Flame Spirit", "Masters Edition II", "ME2");
  }
}

module.exports = FlameSpirit;
