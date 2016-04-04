"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TundraWolvesBase = require("../set6ED/TundraWolves.js");

class TundraWolves extends TundraWolvesBase {
  constructor(game) {
    super(game, "Tundra Wolves", "Fourth Edition", "4ED");
  }
}

module.exports = TundraWolves;
