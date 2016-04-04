"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HauntingHymn extends Card {
  constructor(game) {
    super(game, "Haunting Hymn", "Time Spiral", "TSP");
  }
}

module.exports = HauntingHymn;
