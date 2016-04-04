"use strict";
const Constants = require ("../../../Constants");
const StoneSpiritBase = require("../set5ED/StoneSpirit");

class StoneSpirit extends StoneSpiritBase {
  constructor(game) {
    super(game, "Stone Spirit", "Masters Edition II", "ME2");
  }
}

module.exports = StoneSpirit;
