"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JayemdaeTomeBase = require("../set6ED/JayemdaeTome.js");

class JayemdaeTome extends JayemdaeTomeBase {
  constructor(game) {
    super(game, "Jayemdae Tome", "Introductory Two-Player Set", "ITP");
  }
}

module.exports = JayemdaeTome;
