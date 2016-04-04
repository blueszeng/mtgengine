"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BloodCryptBase = require("../setDIS/BloodCrypt.js");

class BloodCrypt extends BloodCryptBase {
  constructor(game) {
    super(game, "Blood Crypt", "Zendikar Expedition", "EXP");
  }
}

module.exports = BloodCrypt;
