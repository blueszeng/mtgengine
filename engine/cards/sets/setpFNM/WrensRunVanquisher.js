"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WrensRunVanquisherBase = require("../setDD3_EVG/WrensRunVanquisher.js");

class WrensRunVanquisher extends WrensRunVanquisherBase {
  constructor(game) {
    super(game, "Wren's Run Vanquisher", "Friday Night Magic", "pFNM");
  }
}

module.exports = WrensRunVanquisher;
