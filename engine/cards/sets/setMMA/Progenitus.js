"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ProgenitusBase = require("../setCON/Progenitus.js");

class Progenitus extends ProgenitusBase {
  constructor(game) {
    super(game, "Progenitus", "Modern Masters", "MMA");
  }
}

module.exports = Progenitus;
