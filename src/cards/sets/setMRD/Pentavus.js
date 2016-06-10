"use strict";
const Constants = require ("../../../Constants");
const PentavusBase = require("../setC14/Pentavus");

class Pentavus extends PentavusBase {
  constructor (game) {
    super(game, "Pentavus", "Mirrodin", "MRD");
  }
}

module.exports = Pentavus;
