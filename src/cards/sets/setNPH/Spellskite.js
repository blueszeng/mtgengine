"use strict";
const Constants = require ("../../../Constants");
const SpellskiteBase = require("../setMM2/Spellskite");

class Spellskite extends SpellskiteBase {
  constructor (game) {
    super(game, "Spellskite", "New Phyrexia", "NPH");
  }
}

module.exports = Spellskite;
