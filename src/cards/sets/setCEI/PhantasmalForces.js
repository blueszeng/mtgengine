"use strict";
const Constants = require ("../../../Constants");
const PhantasmalForcesBase = require("../setCED/PhantasmalForces");

class PhantasmalForces extends PhantasmalForcesBase {
  constructor (game) {
    super(game, "Phantasmal Forces", "International Collector's Edition", "CEI");
  }
}

module.exports = PhantasmalForces;
