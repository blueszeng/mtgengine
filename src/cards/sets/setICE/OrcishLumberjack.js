"use strict";
const Constants = require ("../../../Constants");
const OrcishLumberjackBase = require("../setCST/OrcishLumberjack");

class OrcishLumberjack extends OrcishLumberjackBase {
  constructor (game) {
    super(game, "Orcish Lumberjack", "Ice Age", "ICE");
  }
}

module.exports = OrcishLumberjack;
