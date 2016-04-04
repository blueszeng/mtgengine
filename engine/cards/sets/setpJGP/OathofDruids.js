"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OathofDruidsBase = require("../setEXO/OathofDruids.js");

class OathofDruids extends OathofDruidsBase {
  constructor(game) {
    super(game, "Oath of Druids", "Judge Gift Program", "pJGP");
  }
}

module.exports = OathofDruids;
