"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DigThroughTime extends Card {
  constructor(game) {
    super(game, "Dig Through Time", "Khans of Tarkir", "KTK");
  }
}

module.exports = DigThroughTime;
