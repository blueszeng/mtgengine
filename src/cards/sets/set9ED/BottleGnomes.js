"use strict";
const Constants = require ("../../../Constants");
const BottleGnomesBase = require("../setC14/BottleGnomes");

class BottleGnomes extends BottleGnomesBase {
  constructor (game) {
    super(game, "Bottle Gnomes", "Ninth Edition", "9ED");
  }
}

module.exports = BottleGnomes;
