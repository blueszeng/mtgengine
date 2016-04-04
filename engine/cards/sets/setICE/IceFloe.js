"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IceFloeBase = require("../set5ED/IceFloe.js");

class IceFloe extends IceFloeBase {
  constructor(game) {
    super(game, "Ice Floe", "Ice Age", "ICE");
  }
}

module.exports = IceFloe;
