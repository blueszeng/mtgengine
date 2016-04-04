"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarduBanner extends Card {
  constructor(game) {
    super(game, "Mardu Banner", "Khans of Tarkir", "KTK");
  }
}

module.exports = MarduBanner;
