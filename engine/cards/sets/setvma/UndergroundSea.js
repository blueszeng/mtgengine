"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UndergroundSeaBase = require("../setCED/UndergroundSea.js");

class UndergroundSea extends UndergroundSeaBase {
  constructor(game) {
    super(game, "Underground Sea", "Vintage Masters", "VMA");
  }
}

module.exports = UndergroundSea;
