"use strict";
const Constants = require ("../../../Constants");
const JuggernautBase = require("../setARC/Juggernaut");

class Juggernaut extends JuggernautBase {
  constructor(game) {
    super(game, "Juggernaut", "Friday Night Magic", "pFNM");
  }
}

module.exports = Juggernaut;
