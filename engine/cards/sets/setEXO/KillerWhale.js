"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KillerWhaleBase = require("../setBTD/KillerWhale.js");

class KillerWhale extends KillerWhaleBase {
  constructor(game) {
    super(game, "Killer Whale", "Exodus", "EXO");
  }
}

module.exports = KillerWhale;
