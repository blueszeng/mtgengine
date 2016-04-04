"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StampedingWildebeestsBase = require("../setDD3_GVL/StampedingWildebeests.js");

class StampedingWildebeests extends StampedingWildebeestsBase {
  constructor(game) {
    super(game, "Stampeding Wildebeests", "Visions", "VIS");
  }
}

module.exports = StampedingWildebeests;
