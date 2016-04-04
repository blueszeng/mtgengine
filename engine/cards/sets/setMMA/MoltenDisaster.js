"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MoltenDisasterBase = require("../setC13/MoltenDisaster.js");

class MoltenDisaster extends MoltenDisasterBase {
  constructor(game) {
    super(game, "Molten Disaster", "Modern Masters", "MMA");
  }
}

module.exports = MoltenDisaster;
