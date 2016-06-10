"use strict";
const Constants = require ("../../../Constants");
const TheRackBase = require("../setATQ/TheRack");

class TheRack extends TheRackBase {
  constructor (game) {
    super(game, "The Rack", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = TheRack;
