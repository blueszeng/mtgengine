"use strict";
const Constants = require ("../../../Constants");
const OrcishMechanicsBase = require("../setATQ/OrcishMechanics");

class OrcishMechanics extends OrcishMechanicsBase {
  constructor(game) {
    super(game, "Orcish Mechanics", "Masters Edition IV", "ME4");
  }
}

module.exports = OrcishMechanics;
