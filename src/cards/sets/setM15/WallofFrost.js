"use strict";
const Constants = require ("../../../Constants");
const WallofFrostBase = require("../setM10/WallofFrost");

class WallofFrost extends WallofFrostBase {
  constructor (game) {
    super(game, "Wall of Frost", "Magic 2015 Core Set", "M15");
  }
}

module.exports = WallofFrost;
