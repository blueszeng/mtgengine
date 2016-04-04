"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KrovikanHorror extends Card {
  constructor(game) {
    super(game, "Krovikan Horror", "Alliances", "ALL");
  }
}

module.exports = KrovikanHorror;
