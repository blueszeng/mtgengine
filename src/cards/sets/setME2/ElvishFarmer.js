"use strict";
const Constants = require ("../../../Constants");
const ElvishFarmerBase = require("../setFEM/ElvishFarmer");

class ElvishFarmer extends ElvishFarmerBase {
  constructor (game) {
    super(game, "Elvish Farmer", "Masters Edition II", "ME2");
  }
}

module.exports = ElvishFarmer;
