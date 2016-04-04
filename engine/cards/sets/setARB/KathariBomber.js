"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KathariBomber extends Card {
  constructor(game) {
    super(game, "Kathari Bomber", "Alara Reborn", "ARB");
  }
}

module.exports = KathariBomber;
