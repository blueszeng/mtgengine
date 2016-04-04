"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BlueElementalBlastBase = require("../setCED/BlueElementalBlast.js");

class BlueElementalBlast extends BlueElementalBlastBase {
  constructor(game) {
    super(game, "Blue Elemental Blast", "Media Inserts", "pMEI");
  }
}

module.exports = BlueElementalBlast;
