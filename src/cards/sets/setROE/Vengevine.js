"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Vengevine extends UnimplementedCard {
  constructor (game) {
    super(game, "Vengevine", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = Vengevine;
