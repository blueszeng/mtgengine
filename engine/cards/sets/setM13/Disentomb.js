"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DisentombBase = require("../setM10/Disentomb.js");

class Disentomb extends DisentombBase {
  constructor(game) {
    super(game, "Disentomb", "Magic 2013", "M13");
  }
}

module.exports = Disentomb;
