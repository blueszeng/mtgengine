"use strict";
const Constants = require ("../../../Constants");
const FertilidBase = require("../setARC/Fertilid");

class Fertilid extends FertilidBase {
  constructor (game) {
    super(game, "Fertilid", "Morningtide", "MOR");
  }
}

module.exports = Fertilid;
