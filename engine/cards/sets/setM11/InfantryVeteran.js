"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const InfantryVeteranBase = require("../setATH/InfantryVeteran.js");

class InfantryVeteran extends InfantryVeteranBase {
  constructor(game) {
    super(game, "Infantry Veteran", "Magic 2011", "M11");
  }
}

module.exports = InfantryVeteran;
