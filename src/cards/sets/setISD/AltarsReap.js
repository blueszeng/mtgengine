"use strict";
const Constants = require ("../../../Constants");
const AltarsReapBase = require("../setBFZ/AltarsReap");

class AltarsReap extends AltarsReapBase {
  constructor (game) {
    super(game, "Altar's Reap", "Innistrad", "ISD");
  }
}

module.exports = AltarsReap;
