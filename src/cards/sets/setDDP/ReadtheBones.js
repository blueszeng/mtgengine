"use strict";
const Constants = require ("../../../Constants");
const ReadtheBonesBase = require("../setC14/ReadtheBones");

class ReadtheBones extends ReadtheBonesBase {
  constructor (game) {
    super(game, "Read the Bones", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = ReadtheBones;
