"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LostSoulBase = require("../set6ED/LostSoul.js");

class LostSoul extends LostSoulBase {
  constructor(game) {
    super(game, "Lost Soul", "Fifth Edition", "5ED");
  }
}

module.exports = LostSoul;
