"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CastleBase = require("../set6ED/Castle.js");

class Castle extends CastleBase {
  constructor(game) {
    super(game, "Castle", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Castle;
