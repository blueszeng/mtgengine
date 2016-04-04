"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WheelofFortuneBase = require("../setCED/WheelofFortune.js");

class WheelofFortune extends WheelofFortuneBase {
  constructor(game) {
    super(game, "Wheel of Fortune", "Revised Edition", "3ED");
  }
}

module.exports = WheelofFortune;
