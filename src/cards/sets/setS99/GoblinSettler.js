"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinSettler extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Settler", "Starter 1999", "S99");
  }
}

module.exports = GoblinSettler;
