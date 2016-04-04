"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CelestialPrismBase = require("../setCED/CelestialPrism.js");

class CelestialPrism extends CelestialPrismBase {
  constructor(game) {
    super(game, "Celestial Prism", "Unlimited Edition", "2ED");
  }
}

module.exports = CelestialPrism;
