"use strict";
const Constants = require ("../../../Constants");
const TimberWolvesBase = require("../setCED/TimberWolves");

class TimberWolves extends TimberWolvesBase {
  constructor (game) {
    super(game, "Timber Wolves", "Limited Edition Alpha", "LEA");
  }
}

module.exports = TimberWolves;
