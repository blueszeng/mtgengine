"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WightofPrecinctSixBase = require("../setC13/WightofPrecinctSix.js");

class WightofPrecinctSix extends WightofPrecinctSixBase {
  constructor(game) {
    super(game, "Wight of Precinct Six", "Gatecrash", "GTC");
  }
}

module.exports = WightofPrecinctSix;
