"use strict";
const Constants = require ("../../../Constants");
const ColossusofSardiaBase = require("../setATQ/ColossusofSardia");

class ColossusofSardia extends ColossusofSardiaBase {
  constructor (game) {
    super(game, "Colossus of Sardia", "Fifth Edition", "5ED");
  }
}

module.exports = ColossusofSardia;
