"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SavannahBase = require("../setCED/Savannah.js");

class Savannah extends SavannahBase {
  constructor(game) {
    super(game, "Savannah", "Masters Edition II", "ME2");
  }
}

module.exports = Savannah;
