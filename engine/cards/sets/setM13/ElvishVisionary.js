"use strict";
const Constants = require ("../../../Constants");
const ElvishVisionaryBase = require("../setC14/ElvishVisionary");

class ElvishVisionary extends ElvishVisionaryBase {
  constructor(game) {
    super(game, "Elvish Visionary", "Magic 2013", "M13");
  }
}

module.exports = ElvishVisionary;
