"use strict";
const Constants = require ("../../../Constants");
const ZursWeirdingBase = require("../set6ED/ZursWeirding");

class ZursWeirding extends ZursWeirdingBase {
  constructor (game) {
    super(game, "Zur's Weirding", "Eighth Edition", "8ED");
  }
}

module.exports = ZursWeirding;
