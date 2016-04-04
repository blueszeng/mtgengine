"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HarrowBase = require("../setC14/Harrow.js");

class Harrow extends HarrowBase {
  constructor(game) {
    super(game, "Harrow", "Invasion", "INV");
  }
}

module.exports = Harrow;
