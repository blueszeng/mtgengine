"use strict";
const Constants = require ("../../../Constants");
const SerraBestiaryBase = require("../set5ED/SerraBestiary");

class SerraBestiary extends SerraBestiaryBase {
  constructor (game) {
    super(game, "Serra Bestiary", "Masters Edition IV", "ME4");
  }
}

module.exports = SerraBestiary;
