"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JuggernautBase = require("../setARC/Juggernaut.js");

class Juggernaut extends JuggernautBase {
  constructor(game) {
    super(game, "Juggernaut", "Magic 2011", "M11");
  }
}

module.exports = Juggernaut;
