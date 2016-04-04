"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GhituEncampmentBase = require("../setDDN/GhituEncampment.js");

class GhituEncampment extends GhituEncampmentBase {
  constructor(game) {
    super(game, "Ghitu Encampment", "Urza's Legacy", "ULG");
  }
}

module.exports = GhituEncampment;
