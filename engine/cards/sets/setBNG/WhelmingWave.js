"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WhelmingWave extends Card {
  constructor(game) {
    super(game, "Whelming Wave", "Born of the Gods", "BNG");
  }
}

module.exports = WhelmingWave;
