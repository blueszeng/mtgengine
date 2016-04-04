"use strict";
const Constants = require ("../../../Constants");
const WheelofFortuneBase = require("../setCED/WheelofFortune");

class WheelofFortune extends WheelofFortuneBase {
  constructor(game) {
    super(game, "Wheel of Fortune", "Limited Edition Beta", "LEB");
  }
}

module.exports = WheelofFortune;
