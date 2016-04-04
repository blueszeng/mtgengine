"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MulldrifterBase = require("../setC14/Mulldrifter.js");

class Mulldrifter extends MulldrifterBase {
  constructor(game) {
    super(game, "Mulldrifter", "Lorwyn", "LRW");
  }
}

module.exports = Mulldrifter;
