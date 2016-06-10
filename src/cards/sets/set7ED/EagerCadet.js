"use strict";
const Constants = require ("../../../Constants");
const EagerCadetBase = require("../set8ED/EagerCadet");

class EagerCadet extends EagerCadetBase {
  constructor (game) {
    super(game, "Eager Cadet", "Seventh Edition", "7ED");
  }
}

module.exports = EagerCadet;
