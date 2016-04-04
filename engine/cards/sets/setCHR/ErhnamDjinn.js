"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ErhnamDjinnBase = require("../setATH/ErhnamDjinn.js");

class ErhnamDjinn extends ErhnamDjinnBase {
  constructor(game) {
    super(game, "Erhnam Djinn", "Chronicles", "CHR");
  }
}

module.exports = ErhnamDjinn;
