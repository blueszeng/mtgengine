"use strict";
const Constants = require ("../../../Constants");
const PlagueBeetleBase = require("../set8ED/PlagueBeetle");

class PlagueBeetle extends PlagueBeetleBase {
  constructor(game) {
    super(game, "Plague Beetle", "Tenth Edition", "10E");
  }
}

module.exports = PlagueBeetle;
