"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinPiledriver extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Piledriver", "Judge Gift Program", "pJGP");
  }
}

module.exports = GoblinPiledriver;
