"use strict";
const Constants = require ("../../../Constants");
const SmashtoSmithereensBase = require("../setORI/SmashtoSmithereens");

class SmashtoSmithereens extends SmashtoSmithereensBase {
  constructor (game) {
    super(game, "Smash to Smithereens", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = SmashtoSmithereens;
