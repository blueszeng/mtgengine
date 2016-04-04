"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinKingBase = require("../setATH/GoblinKing.js");

class GoblinKing extends GoblinKingBase {
  constructor(game) {
    super(game, "Goblin King", "Collector's Edition", "CED");
  }
}

module.exports = GoblinKing;
