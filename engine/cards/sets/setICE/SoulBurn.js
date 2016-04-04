"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SoulBurnBase = require("../setCST/SoulBurn.js");

class SoulBurn extends SoulBurnBase {
  constructor(game) {
    super(game, "Soul Burn", "Ice Age", "ICE");
  }
}

module.exports = SoulBurn;
