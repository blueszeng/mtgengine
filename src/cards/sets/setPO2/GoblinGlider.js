"use strict";
const Constants = require ("../../../Constants");
const GoblinGliderBase = require("../set8ED/GoblinGlider");

class GoblinGlider extends GoblinGliderBase {
  constructor (game) {
    super(game, "Goblin Glider", "Portal Second Age", "PO2");
  }
}

module.exports = GoblinGlider;
