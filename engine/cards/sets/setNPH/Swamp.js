"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SwampBase = require("../setATH/Swamp.js");

class Swamp extends SwampBase {
  constructor(game) {
    super(game, "Swamp", "New Phyrexia", "NPH");
  }
}

module.exports = Swamp;
