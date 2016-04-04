"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GruulTurf extends Card {
  constructor(game) {
    super(game, "Gruul Turf", "Guildpact", "GPT");
  }
}

module.exports = GruulTurf;
