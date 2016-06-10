"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hostility extends UnimplementedCard {
  constructor (game) {
    super(game, "Hostility", "Commander 2015", "C15");
  }
}

module.exports = Hostility;
