"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EmberwildeAugurBase = require("../setDD3_EVG/EmberwildeAugur.js");

class EmberwildeAugur extends EmberwildeAugurBase {
  constructor(game) {
    super(game, "Emberwilde Augur", "Future Sight", "FUT");
  }
}

module.exports = EmberwildeAugur;
