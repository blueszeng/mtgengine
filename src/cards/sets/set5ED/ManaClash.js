"use strict";
const Constants = require ("../../../Constants");
const ManaClashBase = require("../set8ED/ManaClash");

class ManaClash extends ManaClashBase {
  constructor (game) {
    super(game, "Mana Clash", "Fifth Edition", "5ED");
  }
}

module.exports = ManaClash;
