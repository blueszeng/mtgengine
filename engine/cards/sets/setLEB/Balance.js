"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BalanceBase = require("../setCED/Balance.js");

class Balance extends BalanceBase {
  constructor(game) {
    super(game, "Balance", "Limited Edition Beta", "LEB");
  }
}

module.exports = Balance;
