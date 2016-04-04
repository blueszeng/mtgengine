"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TakklemaggotBase = require("../setCHR/Takklemaggot.js");

class Takklemaggot extends TakklemaggotBase {
  constructor(game) {
    super(game, "Takklemaggot", "Masters Edition III", "ME3");
  }
}

module.exports = Takklemaggot;
