"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Worldknit extends Card {
  constructor(game) {
    super(game, "Worldknit", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = Worldknit;
