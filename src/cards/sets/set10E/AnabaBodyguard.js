"use strict";
const Constants = require ("../../../Constants");
const AnabaBodyguardBase = require("../set6ED/AnabaBodyguard");

class AnabaBodyguard extends AnabaBodyguardBase {
  constructor (game) {
    super(game, "Anaba Bodyguard", "Tenth Edition", "10E");
  }
}

module.exports = AnabaBodyguard;
