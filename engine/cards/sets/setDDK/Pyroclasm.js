"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PyroclasmBase = require("../setDKM/Pyroclasm.js");

class Pyroclasm extends PyroclasmBase {
  constructor(game) {
    super(game, "Pyroclasm", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = Pyroclasm;
