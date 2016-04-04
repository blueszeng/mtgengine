"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PillageBase = require("../setALL/Pillage.js");

class Pillage extends PillageBase {
  constructor(game) {
    super(game, "Pillage", "Arena League", "pARL");
  }
}

module.exports = Pillage;
