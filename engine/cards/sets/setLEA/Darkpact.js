"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DarkpactBase = require("../setCED/Darkpact.js");

class Darkpact extends DarkpactBase {
  constructor(game) {
    super(game, "Darkpact", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Darkpact;
