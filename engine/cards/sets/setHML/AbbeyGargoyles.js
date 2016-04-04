"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AbbeyGargoylesBase = require("../set5ED/AbbeyGargoyles.js");

class AbbeyGargoyles extends AbbeyGargoylesBase {
  constructor(game) {
    super(game, "Abbey Gargoyles", "Homelands", "HML");
  }
}

module.exports = AbbeyGargoyles;
