"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Inspiration extends Card {
  constructor(game) {
    super(game, "Inspiration", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Inspiration;
