"use strict";
const Constants = require ("../../../Constants");
const JadeMonolithBase = require("../set6ED/JadeMonolith");

class JadeMonolith extends JadeMonolithBase {
  constructor (game) {
    super(game, "Jade Monolith", "Limited Edition Beta", "LEB");
  }
}

module.exports = JadeMonolith;
