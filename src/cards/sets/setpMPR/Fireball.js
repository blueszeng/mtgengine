"use strict";
const Constants = require ("../../../Constants");
const FireballBase = require("../setATH/Fireball");

class Fireball extends FireballBase {
  constructor (game) {
    super(game, "Fireball", "Magic Player Rewards", "pMPR");
  }
}

module.exports = Fireball;
