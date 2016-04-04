"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElephantGraveyard extends Card {
  constructor(game) {
    super(game, "Elephant Graveyard", "Arabian Nights", "ARN");
  }
}

module.exports = ElephantGraveyard;
