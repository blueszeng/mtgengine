"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SkullclampBase = require("../setC14/Skullclamp.js");

class Skullclamp extends SkullclampBase {
  constructor(game) {
    super(game, "Skullclamp", "From the Vault: Exiled", "V09");
  }
}

module.exports = Skullclamp;
