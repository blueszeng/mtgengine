"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MinersBane extends UnimplementedCard {
  constructor (game) {
    super(game, "Miner's Bane", "Magic 2015 Core Set", "M15");
  }
}

module.exports = MinersBane;
