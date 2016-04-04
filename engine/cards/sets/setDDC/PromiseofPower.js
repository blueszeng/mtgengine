"use strict";
const Constants = require ("../../../Constants");
const PromiseofPowerBase = require("../setC14/PromiseofPower");

class PromiseofPower extends PromiseofPowerBase {
  constructor(game) {
    super(game, "Promise of Power", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = PromiseofPower;
