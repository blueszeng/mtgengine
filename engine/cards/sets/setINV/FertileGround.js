"use strict";
const Constants = require ("../../../Constants");
const FertileGroundBase = require("../setBRB/FertileGround");

class FertileGround extends FertileGroundBase {
  constructor(game) {
    super(game, "Fertile Ground", "Invasion", "INV");
  }
}

module.exports = FertileGround;
