"use strict";
const Constants = require ("../../../Constants");
const SedgeTrollBase = require("../setCED/SedgeTroll");

class SedgeTroll extends SedgeTrollBase {
  constructor(game) {
    super(game, "Sedge Troll", "Limited Edition Alpha", "LEA");
  }
}

module.exports = SedgeTroll;
