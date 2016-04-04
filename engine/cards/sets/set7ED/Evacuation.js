"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EvacuationBase = require("../setDPA/Evacuation.js");

class Evacuation extends EvacuationBase {
  constructor(game) {
    super(game, "Evacuation", "Seventh Edition", "7ED");
  }
}

module.exports = Evacuation;
