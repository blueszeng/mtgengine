"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PolymorphistsJest extends UnimplementedCard {
  constructor (game) {
    super(game, "Polymorphist's Jest", "Magic 2015 Core Set", "M15");
  }
}

module.exports = PolymorphistsJest;
