"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DiffusionSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Diffusion Sliver", "Magic 2015 Core Set", "M15");
  }
}

module.exports = DiffusionSliver;
