"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AncientTombBase = require("../setV12/AncientTomb.js");

class AncientTomb extends AncientTombBase {
  constructor(game) {
    super(game, "Ancient Tomb", "Vintage Masters", "VMA");
  }
}

module.exports = AncientTomb;
