"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GuileBase = require("../setDD3_JVC/Guile.js");

class Guile extends GuileBase {
  constructor(game) {
    super(game, "Guile", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = Guile;
