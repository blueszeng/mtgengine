"use strict";
const Constants = require ("../../../Constants");
const BerserkBase = require("../setCED/Berserk");

class Berserk extends BerserkBase {
  constructor (game) {
    super(game, "Berserk", "Unlimited Edition", "2ED");
  }
}

module.exports = Berserk;
