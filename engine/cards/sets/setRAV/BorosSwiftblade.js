"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BorosSwiftbladeBase = require("../setMM2/BorosSwiftblade.js");

class BorosSwiftblade extends BorosSwiftbladeBase {
  constructor(game) {
    super(game, "Boros Swiftblade", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = BorosSwiftblade;
