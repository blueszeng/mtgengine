"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CorruptBase = require("../setDD3_DVD/Corrupt.js");

class Corrupt extends CorruptBase {
  constructor(game) {
    super(game, "Corrupt", "Media Inserts", "pMEI");
  }
}

module.exports = Corrupt;
