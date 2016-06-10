"use strict";
const Constants = require ("../../../Constants");
const EbonyHorseBase = require("../setARN/EbonyHorse");

class EbonyHorse extends EbonyHorseBase {
  constructor (game) {
    super(game, "Ebony Horse", "Masters Edition IV", "ME4");
  }
}

module.exports = EbonyHorse;
