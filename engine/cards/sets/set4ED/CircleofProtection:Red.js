"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CircleofProtection:RedBase = require("../set6ED/CircleofProtection:Red.js");

class CircleofProtection:Red extends CircleofProtection:RedBase {
  constructor(game) {
    super(game, "Circle of Protection: Red", "Fourth Edition", "4ED");
  }
}

module.exports = CircleofProtection:Red;
