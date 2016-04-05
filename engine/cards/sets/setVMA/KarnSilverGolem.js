"use strict";
const Constants = require ("../../../Constants");
const KarnSilverGolemBase = require("../setpARL/KarnSilverGolem");

class KarnSilverGolem extends KarnSilverGolemBase {
  constructor(game) {
    super(game, "Karn, Silver Golem", "Vintage Masters", "VMA");
  }
}

module.exports = KarnSilverGolem;
