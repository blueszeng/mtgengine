"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KarmicGuide extends UnimplementedCard {
  constructor (game) {
    super(game, "Karmic Guide", "Commander 2013 Edition", "C13");
  }
}

module.exports = KarmicGuide;
