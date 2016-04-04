"use strict";
const Constants = require ("../../../Constants");
const SageOwlBase = require("../set6ED/SageOwl");

class SageOwl extends SageOwlBase {
  constructor(game) {
    super(game, "Sage Owl", "Tenth Edition", "10E");
  }
}

module.exports = SageOwl;
