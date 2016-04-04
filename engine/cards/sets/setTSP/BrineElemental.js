"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BrineElementalBase = require("../setC14/BrineElemental.js");

class BrineElemental extends BrineElementalBase {
  constructor(game) {
    super(game, "Brine Elemental", "Time Spiral", "TSP");
  }
}

module.exports = BrineElemental;
