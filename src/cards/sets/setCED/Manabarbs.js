"use strict";
const Constants = require ("../../../Constants");
const ManabarbsBase = require("../set6ED/Manabarbs");

class Manabarbs extends ManabarbsBase {
  constructor (game) {
    super(game, "Manabarbs", "Collector's Edition", "CED");
  }
}

module.exports = Manabarbs;
