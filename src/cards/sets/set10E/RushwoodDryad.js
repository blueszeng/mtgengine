"use strict";
const Constants = require ("../../../Constants");
const RushwoodDryadBase = require("../set8ED/RushwoodDryad");

class RushwoodDryad extends RushwoodDryadBase {
  constructor (game) {
    super(game, "Rushwood Dryad", "Tenth Edition", "10E");
  }
}

module.exports = RushwoodDryad;
