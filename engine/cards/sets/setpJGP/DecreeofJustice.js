"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DecreeofJusticeBase = require("../setC14/DecreeofJustice.js");

class DecreeofJustice extends DecreeofJusticeBase {
  constructor(game) {
    super(game, "Decree of Justice", "Judge Gift Program", "pJGP");
  }
}

module.exports = DecreeofJustice;
