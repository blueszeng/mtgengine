"use strict";
const Constants = require ("../../../Constants");
const CrystalRodBase = require("../set6ED/CrystalRod");

class CrystalRod extends CrystalRodBase {
  constructor (game) {
    super(game, "Crystal Rod", "Limited Edition Alpha", "LEA");
  }
}

module.exports = CrystalRod;
