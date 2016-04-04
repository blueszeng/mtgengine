"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhantasmalForcesBase = require("../setCED/PhantasmalForces.js");

class PhantasmalForces extends PhantasmalForcesBase {
  constructor(game) {
    super(game, "Phantasmal Forces", "Fifth Edition", "5ED");
  }
}

module.exports = PhantasmalForces;
