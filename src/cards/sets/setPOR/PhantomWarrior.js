"use strict";
const Constants = require ("../../../Constants");
const PhantomWarriorBase = require("../set6ED/PhantomWarrior");

class PhantomWarrior extends PhantomWarriorBase {
  constructor (game) {
    super(game, "Phantom Warrior", "Portal", "POR");
  }
}

module.exports = PhantomWarrior;
