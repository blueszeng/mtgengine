"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LotusBloomBase = require("../setMMA/LotusBloom.js");

class LotusBloom extends LotusBloomBase {
  constructor(game) {
    super(game, "Lotus Bloom", "Time Spiral", "TSP");
  }
}

module.exports = LotusBloom;
