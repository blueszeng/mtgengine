"use strict";
const Constants = require ("../../../Constants");
const PlateauBase = require("../setCED/Plateau");

class Plateau extends PlateauBase {
  constructor (game) {
    super(game, "Plateau", "Limited Edition Beta", "LEB");
  }
}

module.exports = Plateau;
