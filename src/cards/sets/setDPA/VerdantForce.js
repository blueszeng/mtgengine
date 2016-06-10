"use strict";
const Constants = require ("../../../Constants");
const VerdantForceBase = require("../setC15/VerdantForce");

class VerdantForce extends VerdantForceBase {
  constructor (game) {
    super(game, "Verdant Force", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = VerdantForce;
