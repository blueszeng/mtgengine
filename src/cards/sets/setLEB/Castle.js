"use strict";
const Constants = require ("../../../Constants");
const CastleBase = require("../set6ED/Castle");

class Castle extends CastleBase {
  constructor (game) {
    super(game, "Castle", "Limited Edition Beta", "LEB");
  }
}

module.exports = Castle;
