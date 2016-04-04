"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SupremeVerdict extends Card {
  constructor(game) {
    super(game, "Supreme Verdict", "Media Inserts", "pMEI");
  }
}

module.exports = SupremeVerdict;
