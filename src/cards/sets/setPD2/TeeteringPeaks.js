"use strict";
const Constants = require ("../../../Constants");
const TeeteringPeaksBase = require("../setpFNM/TeeteringPeaks");

class TeeteringPeaks extends TeeteringPeaksBase {
  constructor (game) {
    super(game, "Teetering Peaks", "Premium Deck Series: Fire and Lightning", "PD2");
  }
}

module.exports = TeeteringPeaks;
