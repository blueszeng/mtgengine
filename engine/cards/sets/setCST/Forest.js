"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ForestBase = require("../setATH/Forest.js");

class Forest extends ForestBase {
  constructor(game) {
    super(game, "Forest", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = Forest;
