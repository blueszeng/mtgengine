"use strict";
const Constants = require ("../../../Constants");
const AnkhofMishraBase = require("../set6ED/AnkhofMishra");

class AnkhofMishra extends AnkhofMishraBase {
  constructor (game) {
    super(game, "Ankh of Mishra", "Limited Edition Beta", "LEB");
  }
}

module.exports = AnkhofMishra;
