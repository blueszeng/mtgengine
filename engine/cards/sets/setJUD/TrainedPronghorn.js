"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TrainedPronghorn extends Card {
  constructor(game) {
    super(game, "Trained Pronghorn", "Judgment", "JUD");
  }
}

module.exports = TrainedPronghorn;
