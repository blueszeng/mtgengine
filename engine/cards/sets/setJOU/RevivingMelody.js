"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RevivingMelody extends Card {
  constructor(game) {
    super(game, "Reviving Melody", "Journey into Nyx", "JOU");
  }
}

module.exports = RevivingMelody;
