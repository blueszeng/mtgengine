"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CruelRevivalBase = require("../setORI/CruelRevival.js");

class CruelRevival extends CruelRevivalBase {
  constructor(game) {
    super(game, "Cruel Revival", "Planechase", "HOP");
  }
}

module.exports = CruelRevival;
