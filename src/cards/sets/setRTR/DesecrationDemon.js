"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DesecrationDemon extends UnimplementedCard {
  constructor (game) {
    super(game, "Desecration Demon", "Return to Ravnica", "RTR");
  }
}

module.exports = DesecrationDemon;
