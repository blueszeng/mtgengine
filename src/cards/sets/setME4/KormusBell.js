"use strict";
const Constants = require ("../../../Constants");
const KormusBellBase = require("../setCED/KormusBell");

class KormusBell extends KormusBellBase {
  constructor (game) {
    super(game, "Kormus Bell", "Masters Edition IV", "ME4");
  }
}

module.exports = KormusBell;
