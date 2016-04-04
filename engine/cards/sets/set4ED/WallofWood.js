"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WallofWoodBase = require("../setCED/WallofWood.js");

class WallofWood extends WallofWoodBase {
  constructor(game) {
    super(game, "Wall of Wood", "Fourth Edition", "4ED");
  }
}

module.exports = WallofWood;
