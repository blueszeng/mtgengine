"use strict";
const Constants = require ("../../../Constants");
const PlagueRatsBase = require("../setCED/PlagueRats");

class PlagueRats extends PlagueRatsBase {
  constructor (game) {
    super(game, "Plague Rats", "Limited Edition Alpha", "LEA");
  }
}

module.exports = PlagueRats;
