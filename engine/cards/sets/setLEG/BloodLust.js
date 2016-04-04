"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BloodLustBase = require("../set5ED/BloodLust.js");

class BloodLust extends BloodLustBase {
  constructor(game) {
    super(game, "Blood Lust", "Legends", "LEG");
  }
}

module.exports = BloodLust;
