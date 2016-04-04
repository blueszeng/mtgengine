"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FontofFortunes extends Card {
  constructor(game) {
    super(game, "Font of Fortunes", "Journey into Nyx", "JOU");
  }
}

module.exports = FontofFortunes;
