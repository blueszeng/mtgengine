"use strict";
const Constants = require ("../../../Constants");
const MawcorBase = require("../set7ED/Mawcor");

class Mawcor extends MawcorBase {
  constructor (game) {
    super(game, "Mawcor", "Tempest", "TMP");
  }
}

module.exports = Mawcor;
