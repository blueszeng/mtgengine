"use strict";
const Constants = require ("../../../Constants");
const IvoryGuardiansBase = require("../setCHR/IvoryGuardians");

class IvoryGuardians extends IvoryGuardiansBase {
  constructor (game) {
    super(game, "Ivory Guardians", "Legends", "LEG");
  }
}

module.exports = IvoryGuardians;
