"use strict";
const Constants = require ("../../../Constants");
const ExtractorDemonBase = require("../setARC/ExtractorDemon");

class ExtractorDemon extends ExtractorDemonBase {
  constructor (game) {
    super(game, "Extractor Demon", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = ExtractorDemon;
