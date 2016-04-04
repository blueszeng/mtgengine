"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FeralShadowBase = require("../setBTD/FeralShadow.js");

class FeralShadow extends FeralShadowBase {
  constructor(game) {
    super(game, "Feral Shadow", "Portal", "POR");
  }
}

module.exports = FeralShadow;
