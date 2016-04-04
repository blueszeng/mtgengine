"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SengirAutocratBase = require("../set6ED/SengirAutocrat.js");

class SengirAutocrat extends SengirAutocratBase {
  constructor(game) {
    super(game, "Sengir Autocrat", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = SengirAutocrat;
