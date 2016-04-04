"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SwiftwaterCliffsBase = require("../setC15/SwiftwaterCliffs.js");

class SwiftwaterCliffs extends SwiftwaterCliffsBase {
  constructor(game) {
    super(game, "Swiftwater Cliffs", "Khans of Tarkir", "KTK");
  }
}

module.exports = SwiftwaterCliffs;
