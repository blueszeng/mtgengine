"use strict";
const Constants = require ("../../../Constants");
const HandofJusticeBase = require("../setFEM/HandofJustice");

class HandofJustice extends HandofJusticeBase {
  constructor (game) {
    super(game, "Hand of Justice", "Masters Edition", "MED");
  }
}

module.exports = HandofJustice;
