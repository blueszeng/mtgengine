"use strict";
const Constants = require ("../../../Constants");
const IslandBase = require("../setARC/Island");

class Island extends IslandBase {
  constructor (game) {
    super(game, "Island", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Island;
