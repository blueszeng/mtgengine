"use strict";
const Constants = require ("../../../Constants");
const TerrorBase = require("../setATH/Terror");

class Terror extends TerrorBase {
  constructor (game) {
    super(game, "Terror", "Unlimited Edition", "2ED");
  }
}

module.exports = Terror;
