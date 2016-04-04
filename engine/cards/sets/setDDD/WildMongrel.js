"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WildMongrelBase = require("../setDD3_GVL/WildMongrel.js");

class WildMongrel extends WildMongrelBase {
  constructor(game) {
    super(game, "Wild Mongrel", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = WildMongrel;
