"use strict";
const Constants = require ("../../../Constants");
const BlackViseBase = require("../setCED/BlackVise");

class BlackVise extends BlackViseBase {
  constructor (game) {
    super(game, "Black Vise", "Limited Edition Beta", "LEB");
  }
}

module.exports = BlackVise;
