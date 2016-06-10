"use strict";
const Constants = require ("../../../Constants");
const RancorBase = require("../setARC/Rancor");

class Rancor extends RancorBase {
  constructor (game) {
    super(game, "Rancor", "Magic 2013", "M13");
  }
}

module.exports = Rancor;
