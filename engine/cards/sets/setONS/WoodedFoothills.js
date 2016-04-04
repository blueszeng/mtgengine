"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WoodedFoothillsBase = require("../setpJGP/WoodedFoothills.js");

class WoodedFoothills extends WoodedFoothillsBase {
  constructor(game) {
    super(game, "Wooded Foothills", "Onslaught", "ONS");
  }
}

module.exports = WoodedFoothills;
