"use strict";
const Constants = require ("../../../Constants");
const WallofSwordsBase = require("../set6ED/WallofSwords");

class WallofSwords extends WallofSwordsBase {
  constructor (game) {
    super(game, "Wall of Swords", "Limited Edition Beta", "LEB");
  }
}

module.exports = WallofSwords;
