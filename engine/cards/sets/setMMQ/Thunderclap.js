"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Thunderclap extends Card {
  constructor(game) {
    super(game, "Thunderclap", "Mercadian Masques", "MMQ");
  }
}

module.exports = Thunderclap;
