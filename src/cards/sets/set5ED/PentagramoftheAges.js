"use strict";
const Constants = require ("../../../Constants");
const PentagramoftheAgesBase = require("../set6ED/PentagramoftheAges");

class PentagramoftheAges extends PentagramoftheAgesBase {
  constructor (game) {
    super(game, "Pentagram of the Ages", "Fifth Edition", "5ED");
  }
}

module.exports = PentagramoftheAges;
