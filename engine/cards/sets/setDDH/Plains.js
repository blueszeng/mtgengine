"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PlainsBase = require("../setATH/Plains.js");

class Plains extends PlainsBase {
  constructor(game) {
    super(game, "Plains", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = Plains;
