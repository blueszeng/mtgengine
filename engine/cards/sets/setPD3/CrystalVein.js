"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CrystalVeinBase = require("../set6ED/CrystalVein.js");

class CrystalVein extends CrystalVeinBase {
  constructor(game) {
    super(game, "Crystal Vein", "Premium Deck Series: Graveborn", "PD3");
  }
}

module.exports = CrystalVein;
