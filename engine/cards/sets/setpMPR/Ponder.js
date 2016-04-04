"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PonderBase = require("../setLRW/Ponder.js");

class Ponder extends PonderBase {
  constructor(game) {
    super(game, "Ponder", "Magic Player Rewards", "pMPR");
  }
}

module.exports = Ponder;
