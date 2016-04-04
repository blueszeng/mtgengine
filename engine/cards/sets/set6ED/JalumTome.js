"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JalumTomeBase = require("../setATH/JalumTome.js");

class JalumTome extends JalumTomeBase {
  constructor(game) {
    super(game, "Jalum Tome", "Classic Sixth Edition", "6ED");
  }
}

module.exports = JalumTome;
