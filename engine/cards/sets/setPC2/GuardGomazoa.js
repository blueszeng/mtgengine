"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GuardGomazoaBase = require("../setC13/GuardGomazoa.js");

class GuardGomazoa extends GuardGomazoaBase {
  constructor(game) {
    super(game, "Guard Gomazoa", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = GuardGomazoa;
