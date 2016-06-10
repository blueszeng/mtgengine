"use strict";
const Constants = require ("../../../Constants");
const NegateBase = require("../setDTK/Negate");

class Negate extends NegateBase {
  constructor (game) {
    super(game, "Negate", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = Negate;
