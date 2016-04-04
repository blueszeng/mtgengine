"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OblivionRingBase = require("../setARC/OblivionRing.js");

class OblivionRing extends OblivionRingBase {
  constructor(game) {
    super(game, "Oblivion Ring", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = OblivionRing;
