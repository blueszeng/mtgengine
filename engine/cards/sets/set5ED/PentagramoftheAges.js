"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PentagramoftheAgesBase = require("../set6ED/PentagramoftheAges.js");

class PentagramoftheAges extends PentagramoftheAgesBase {
  constructor(game) {
    super(game, "Pentagram of the Ages", "Fifth Edition", "5ED");
  }
}

module.exports = PentagramoftheAges;
