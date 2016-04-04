"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ObsianusGolem extends Card {
  constructor(game) {
    super(game, "Obsianus Golem", "Classic Sixth Edition", "6ED");
  }
}

module.exports = ObsianusGolem;
