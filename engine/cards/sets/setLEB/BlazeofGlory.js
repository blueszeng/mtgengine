"use strict";
const Constants = require ("../../../Constants");
const BlazeofGloryBase = require("../setCED/BlazeofGlory");

class BlazeofGlory extends BlazeofGloryBase {
  constructor(game) {
    super(game, "Blaze of Glory", "Limited Edition Beta", "LEB");
  }
}

module.exports = BlazeofGlory;
