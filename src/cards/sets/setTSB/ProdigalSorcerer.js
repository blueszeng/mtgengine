"use strict";
const Constants = require ("../../../Constants");
const ProdigalSorcererBase = require("../setBRB/ProdigalSorcerer");

class ProdigalSorcerer extends ProdigalSorcererBase {
  constructor (game) {
    super(game, "Prodigal Sorcerer", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = ProdigalSorcerer;
