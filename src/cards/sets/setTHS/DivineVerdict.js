"use strict";
const Constants = require ("../../../Constants");
const DivineVerdictBase = require("../setM10/DivineVerdict");

class DivineVerdict extends DivineVerdictBase {
  constructor (game) {
    super(game, "Divine Verdict", "Theros", "THS");
  }
}

module.exports = DivineVerdict;
