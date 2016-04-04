"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinChirurgeonBase = require("../setFEM/GoblinChirurgeon.js");

class GoblinChirurgeon extends GoblinChirurgeonBase {
  constructor(game) {
    super(game, "Goblin Chirurgeon", "Masters Edition", "MED");
  }
}

module.exports = GoblinChirurgeon;
