"use strict";
const Constants = require ("../../../Constants");
const WallofBlossomsBase = require("../setC15/WallofBlossoms");

class WallofBlossoms extends WallofBlossomsBase {
  constructor (game) {
    super(game, "Wall of Blossoms", "Stronghold", "STH");
  }
}

module.exports = WallofBlossoms;
