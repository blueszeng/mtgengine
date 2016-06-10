"use strict";
const Constants = require ("../../../Constants");
const CarnivorousPlantBase = require("../setATH/CarnivorousPlant");

class CarnivorousPlant extends CarnivorousPlantBase {
  constructor (game) {
    super(game, "Carnivorous Plant", "Fourth Edition", "4ED");
  }
}

module.exports = CarnivorousPlant;
