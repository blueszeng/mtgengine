"use strict";
const Constants = require ("../../../Constants");
const ManaShortBase = require("../set6ED/ManaShort");

class ManaShort extends ManaShortBase {
  constructor (game) {
    super(game, "Mana Short", "Limited Edition Alpha", "LEA");
  }
}

module.exports = ManaShort;
