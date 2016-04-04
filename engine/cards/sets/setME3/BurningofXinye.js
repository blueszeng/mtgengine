"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BurningofXinyeBase = require("../setV14/BurningofXinye.js");

class BurningofXinye extends BurningofXinyeBase {
  constructor(game) {
    super(game, "Burning of Xinye", "Masters Edition III", "ME3");
  }
}

module.exports = BurningofXinye;
