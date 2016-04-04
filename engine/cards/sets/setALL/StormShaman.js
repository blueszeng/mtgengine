"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StormShaman extends Card {
  constructor(game) {
    super(game, "Storm Shaman", "Alliances", "ALL");
  }
}

module.exports = StormShaman;
