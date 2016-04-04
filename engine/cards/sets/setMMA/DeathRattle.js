"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeathRattleBase = require("../setFUT/DeathRattle.js");

class DeathRattle extends DeathRattleBase {
  constructor(game) {
    super(game, "Death Rattle", "Modern Masters", "MMA");
  }
}

module.exports = DeathRattle;
