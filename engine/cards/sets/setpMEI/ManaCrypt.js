"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ManaCryptBase = require("../setpJGP/ManaCrypt.js");

class ManaCrypt extends ManaCryptBase {
  constructor(game) {
    super(game, "Mana Crypt", "Media Inserts", "pMEI");
  }
}

module.exports = ManaCrypt;
