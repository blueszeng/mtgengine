"use strict";
const Constants = require ("../../../Constants");
const LuminousAngelBase = require("../setDD3_DVD/LuminousAngel");

class LuminousAngel extends LuminousAngelBase {
  constructor (game) {
    super(game, "Luminous Angel", "Mirrodin", "MRD");
  }
}

module.exports = LuminousAngel;
