"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AvalancheRidersBase = require("../setpFNM/AvalancheRiders.js");

class AvalancheRiders extends AvalancheRidersBase {
  constructor(game) {
    super(game, "Avalanche Riders", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = AvalancheRiders;
