"use strict";
const Constants = require ("../../../Constants");
const UnsummonBase = require("../set6ED/Unsummon");

class Unsummon extends UnsummonBase {
  constructor (game) {
    super(game, "Unsummon", "Conflux", "CON");
  }
}

module.exports = Unsummon;
