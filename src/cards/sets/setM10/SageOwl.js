"use strict";
const Constants = require ("../../../Constants");
const SageOwlBase = require("../set6ED/SageOwl");

class SageOwl extends SageOwlBase {
  constructor (game) {
    super(game, "Sage Owl", "Magic 2010", "M10");
  }
}

module.exports = SageOwl;
