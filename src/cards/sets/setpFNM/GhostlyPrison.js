"use strict";
const Constants = require ("../../../Constants");
const GhostlyPrisonBase = require("../setCHK/GhostlyPrison");

class GhostlyPrison extends GhostlyPrisonBase {
  constructor (game) {
    super(game, "Ghostly Prison", "Friday Night Magic", "pFNM");
  }
}

module.exports = GhostlyPrison;
