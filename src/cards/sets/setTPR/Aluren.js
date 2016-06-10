"use strict";
const Constants = require ("../../../Constants");
const AlurenBase = require("../setTMP/Aluren");

class Aluren extends AlurenBase {
  constructor (game) {
    super(game, "Aluren", "Tempest Remastered", "TPR");
  }
}

module.exports = Aluren;
