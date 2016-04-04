"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const InstillEnergyBase = require("../setCED/InstillEnergy.js");

class InstillEnergy extends InstillEnergyBase {
  constructor(game) {
    super(game, "Instill Energy", "Revised Edition", "3ED");
  }
}

module.exports = InstillEnergy;
