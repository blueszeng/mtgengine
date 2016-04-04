"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PitScorpionBase = require("../set5ED/PitScorpion.js");

class PitScorpion extends PitScorpionBase {
  constructor(game) {
    super(game, "Pit Scorpion", "Legends", "LEG");
  }
}

module.exports = PitScorpion;
