"use strict";
const Constants = require ("../../../Constants");
const ElvishVisionaryBase = require("../setC14/ElvishVisionary");

class ElvishVisionary extends ElvishVisionaryBase {
  constructor (game) {
    super(game, "Elvish Visionary", "Commander 2015", "C15");
  }
}

module.exports = ElvishVisionary;
