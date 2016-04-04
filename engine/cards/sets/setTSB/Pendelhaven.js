"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PendelhavenBase = require("../setATH/Pendelhaven.js");

class Pendelhaven extends PendelhavenBase {
  constructor(game) {
    super(game, "Pendelhaven", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = Pendelhaven;
