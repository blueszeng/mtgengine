"use strict";
const Constants = require ("../../../Constants");
const DayofJudgmentBase = require("../setM11/DayofJudgment");

class DayofJudgment extends DayofJudgmentBase {
  constructor (game) {
    super(game, "Day of Judgment", "Media Inserts", "pMEI");
  }
}

module.exports = DayofJudgment;
