"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LureBase = require("../setCHK/Lure.js");

class Lure extends LureBase {
  constructor(game) {
    super(game, "Lure", "Eighth Edition", "8ED");
  }
}

module.exports = Lure;
