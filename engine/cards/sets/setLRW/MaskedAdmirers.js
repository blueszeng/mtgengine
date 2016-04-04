"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MaskedAdmirersBase = require("../setC14/MaskedAdmirers.js");

class MaskedAdmirers extends MaskedAdmirersBase {
  constructor(game) {
    super(game, "Masked Admirers", "Lorwyn", "LRW");
  }
}

module.exports = MaskedAdmirers;
