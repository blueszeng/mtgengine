"use strict";
const Constants = require ("../../../Constants");
const ManabarbsBase = require("../set6ED/Manabarbs");

class Manabarbs extends ManabarbsBase {
  constructor(game) {
    super(game, "Manabarbs", "Limited Edition Beta", "LEB");
  }
}

module.exports = Manabarbs;
