"use strict";
const Constants = require ("../../../Constants");
const GuileBase = require("../setDD3_JVC/Guile");

class Guile extends GuileBase {
  constructor (game) {
    super(game, "Guile", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = Guile;
