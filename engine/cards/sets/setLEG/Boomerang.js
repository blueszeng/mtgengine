"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BoomerangBase = require("../setCHR/Boomerang.js");

class Boomerang extends BoomerangBase {
  constructor(game) {
    super(game, "Boomerang", "Legends", "LEG");
  }
}

module.exports = Boomerang;
