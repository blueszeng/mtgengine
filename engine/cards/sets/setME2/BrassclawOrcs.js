"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BrassclawOrcsBase = require("../setFEM/BrassclawOrcs.js");

class BrassclawOrcs extends BrassclawOrcsBase {
  constructor(game) {
    super(game, "Brassclaw Orcs", "Masters Edition II", "ME2");
  }
}

module.exports = BrassclawOrcs;
