"use strict";
const Constants = require ("../../../Constants");
const ExplosiveVegetationBase = require("../setDTK/ExplosiveVegetation");

class ExplosiveVegetation extends ExplosiveVegetationBase {
  constructor (game) {
    super(game, "Explosive Vegetation", "Onslaught", "ONS");
  }
}

module.exports = ExplosiveVegetation;
