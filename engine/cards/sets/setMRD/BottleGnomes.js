"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BottleGnomesBase = require("../setC14/BottleGnomes.js");

class BottleGnomes extends BottleGnomesBase {
  constructor(game) {
    super(game, "Bottle Gnomes", "Mirrodin", "MRD");
  }
}

module.exports = BottleGnomes;
