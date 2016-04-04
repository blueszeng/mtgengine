"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WalkeroftheGroveBase = require("../setC13/WalkeroftheGrove.js");

class WalkeroftheGrove extends WalkeroftheGroveBase {
  constructor(game) {
    super(game, "Walker of the Grove", "Modern Masters", "MMA");
  }
}

module.exports = WalkeroftheGrove;
