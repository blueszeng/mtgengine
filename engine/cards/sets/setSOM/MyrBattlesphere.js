"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MyrBattlesphereBase = require("../setC13/MyrBattlesphere.js");

class MyrBattlesphere extends MyrBattlesphereBase {
  constructor(game) {
    super(game, "Myr Battlesphere", "Scars of Mirrodin", "SOM");
  }
}

module.exports = MyrBattlesphere;
