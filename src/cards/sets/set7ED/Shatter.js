"use strict";
const Constants = require ("../../../Constants");
const ShatterBase = require("../set6ED/Shatter");

class Shatter extends ShatterBase {
  constructor (game) {
    super(game, "Shatter", "Seventh Edition", "7ED");
  }
}

module.exports = Shatter;
