"use strict";
const Constants = require ("../../../Constants");
const DisenchantBase = require("../setATH/Disenchant");

class Disenchant extends DisenchantBase {
  constructor(game) {
    super(game, "Disenchant", "Magic Player Rewards", "pMPR");
  }
}

module.exports = Disenchant;
