"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DreadWight extends Card {
  constructor(game) {
    super(game, "Dread Wight", "Ice Age", "ICE");
  }
}

module.exports = DreadWight;
