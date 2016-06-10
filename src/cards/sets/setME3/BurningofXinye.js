"use strict";
const Constants = require ("../../../Constants");
const BurningofXinyeBase = require("../setV14/BurningofXinye");

class BurningofXinye extends BurningofXinyeBase {
  constructor (game) {
    super(game, "Burning of Xinye", "Masters Edition III", "ME3");
  }
}

module.exports = BurningofXinye;
