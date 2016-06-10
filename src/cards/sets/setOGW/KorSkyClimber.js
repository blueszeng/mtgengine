"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KorSkyClimber extends UnimplementedCard {
  constructor (game) {
    super(game, "Kor Sky Climber", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = KorSkyClimber;
