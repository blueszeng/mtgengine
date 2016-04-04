"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RaggedVeins extends Card {
  constructor(game) {
    super(game, "Ragged Veins", "Champions of Kamigawa", "CHK");
  }
}

module.exports = RaggedVeins;
