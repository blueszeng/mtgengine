"use strict";
const Constants = require ("../../../Constants");
const TaureanMaulerBase = require("../setARC/TaureanMauler");

class TaureanMauler extends TaureanMaulerBase {
  constructor (game) {
    super(game, "Taurean Mauler", "Planechase", "HOP");
  }
}

module.exports = TaureanMauler;
