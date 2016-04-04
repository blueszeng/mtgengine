"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ViashinoWarriorBase = require("../setBTD/ViashinoWarrior.js");

class ViashinoWarrior extends ViashinoWarriorBase {
  constructor(game) {
    super(game, "Viashino Warrior", "Mirage", "MIR");
  }
}

module.exports = ViashinoWarrior;
