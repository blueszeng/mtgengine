"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SageOwlBase = require("../set6ED/SageOwl.js");

class SageOwl extends SageOwlBase {
  constructor(game) {
    super(game, "Sage Owl", "Weatherlight", "WTH");
  }
}

module.exports = SageOwl;
