"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DivineOfferingBase = require("../setCHR/DivineOffering.js");

class DivineOffering extends DivineOfferingBase {
  constructor(game) {
    super(game, "Divine Offering", "Masters Edition IV", "ME4");
  }
}

module.exports = DivineOffering;
