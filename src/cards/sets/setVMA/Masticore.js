"use strict";
const Constants = require ("../../../Constants");
const MasticoreBase = require("../setV10/Masticore");

class Masticore extends MasticoreBase {
  constructor (game) {
    super(game, "Masticore", "Vintage Masters", "VMA");
  }
}

module.exports = Masticore;
