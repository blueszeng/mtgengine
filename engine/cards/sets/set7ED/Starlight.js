"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StarlightBase = require("../setPOR/Starlight.js");

class Starlight extends StarlightBase {
  constructor(game) {
    super(game, "Starlight", "Seventh Edition", "7ED");
  }
}

module.exports = Starlight;
