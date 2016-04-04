"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Flesh extends Card {
  constructor(game) {
    super(game, "Flesh", "Dragon's Maze", "DGM");
  }
}

module.exports = Flesh;
