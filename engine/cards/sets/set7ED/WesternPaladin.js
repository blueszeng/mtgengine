"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WesternPaladinBase = require("../set8ED/WesternPaladin.js");

class WesternPaladin extends WesternPaladinBase {
  constructor(game) {
    super(game, "Western Paladin", "Seventh Edition", "7ED");
  }
}

module.exports = WesternPaladin;
