"use strict";
const Constants = require ("../../../Constants");
const EmberwildeAugurBase = require("../setDD3_EVG/EmberwildeAugur");

class EmberwildeAugur extends EmberwildeAugurBase {
  constructor (game) {
    super(game, "Emberwilde Augur", "Future Sight", "FUT");
  }
}

module.exports = EmberwildeAugur;
