"use strict";
const Constants = require ("../../../Constants");
const AlluringSirenBase = require("../setM10/AlluringSiren");

class AlluringSiren extends AlluringSirenBase {
  constructor (game) {
    super(game, "Alluring Siren", "Magic 2011", "M11");
  }
}

module.exports = AlluringSiren;
