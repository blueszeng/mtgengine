"use strict";
const Constants = require ("../../../Constants");
const CalloftheWildBase = require("../set6ED/CalloftheWild");

class CalloftheWild extends CalloftheWildBase {
  constructor (game) {
    super(game, "Call of the Wild", "Eighth Edition", "8ED");
  }
}

module.exports = CalloftheWild;
