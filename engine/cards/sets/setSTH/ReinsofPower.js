"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ReinsofPowerBase = require("../setC15/ReinsofPower.js");

class ReinsofPower extends ReinsofPowerBase {
  constructor(game) {
    super(game, "Reins of Power", "Stronghold", "STH");
  }
}

module.exports = ReinsofPower;
