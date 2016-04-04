"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RewindBase = require("../setpARL/Rewind.js");

class Rewind extends RewindBase {
  constructor(game) {
    super(game, "Rewind", "Magic 2013", "M13");
  }
}

module.exports = Rewind;
