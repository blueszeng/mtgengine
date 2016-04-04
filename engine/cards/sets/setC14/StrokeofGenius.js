"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StrokeofGenius extends Card {
  constructor(game) {
    super(game, "Stroke of Genius", "Commander 2014", "C14");
  }
}

module.exports = StrokeofGenius;
