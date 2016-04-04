"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EnergyFluxBase = require("../setATQ/EnergyFlux.js");

class EnergyFlux extends EnergyFluxBase {
  constructor(game) {
    super(game, "Energy Flux", "Masters Edition IV", "ME4");
  }
}

module.exports = EnergyFlux;
