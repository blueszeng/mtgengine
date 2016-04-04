"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const InfernalContractBase = require("../set6ED/InfernalContract.js");

class InfernalContract extends InfernalContractBase {
  constructor(game) {
    super(game, "Infernal Contract", "Mirage", "MIR");
  }
}

module.exports = InfernalContract;
