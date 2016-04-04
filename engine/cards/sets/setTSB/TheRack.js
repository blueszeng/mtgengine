"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TheRackBase = require("../setATQ/TheRack.js");

class TheRack extends TheRackBase {
  constructor(game) {
    super(game, "The Rack", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = TheRack;
