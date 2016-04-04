"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GreaterMorphling extends Card {
  constructor(game) {
    super(game, "Greater Morphling", "Unhinged", "UNH");
  }
}

module.exports = GreaterMorphling;
