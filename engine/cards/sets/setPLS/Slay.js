"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SlayBase = require("../setDDE/Slay.js");

class Slay extends SlayBase {
  constructor(game) {
    super(game, "Slay", "Planeshift", "PLS");
  }
}

module.exports = Slay;
