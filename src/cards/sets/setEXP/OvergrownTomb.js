"use strict";
const Constants = require ("../../../Constants");
const OvergrownTombBase = require("../setRAV/OvergrownTomb");

class OvergrownTomb extends OvergrownTombBase {
  constructor (game) {
    super(game, "Overgrown Tomb", "Zendikar Expedition", "EXP");
  }
}

module.exports = OvergrownTomb;
