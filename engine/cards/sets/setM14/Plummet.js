"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PlummetBase = require("../setARC/Plummet.js");

class Plummet extends PlummetBase {
  constructor(game) {
    super(game, "Plummet", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Plummet;
