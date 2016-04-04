"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DungeonShadeBase = require("../setSTH/DungeonShade.js");

class DungeonShade extends DungeonShadeBase {
  constructor(game) {
    super(game, "Dungeon Shade", "Tempest Remastered", "TPR");
  }
}

module.exports = DungeonShade;
