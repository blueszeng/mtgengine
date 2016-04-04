"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AlchemistsRefuge extends Card {
  constructor(game) {
    super(game, "Alchemist's Refuge", "Avacyn Restored", "AVR");
  }
}

module.exports = AlchemistsRefuge;
