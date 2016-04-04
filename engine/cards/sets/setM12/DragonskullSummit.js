"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DragonskullSummitBase = require("../setM10/DragonskullSummit.js");

class DragonskullSummit extends DragonskullSummitBase {
  constructor(game) {
    super(game, "Dragonskull Summit", "Magic 2012", "M12");
  }
}

module.exports = DragonskullSummit;
