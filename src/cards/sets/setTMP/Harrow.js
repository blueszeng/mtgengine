"use strict";
const Constants = require ("../../../Constants");
const HarrowBase = require("../setC14/Harrow");

class Harrow extends HarrowBase {
  constructor (game) {
    super(game, "Harrow", "Tempest", "TMP");
  }
}

module.exports = Harrow;
