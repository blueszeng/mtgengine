"use strict";
const Constants = require ("../../../Constants");
const SpellBlastBase = require("../set6ED/SpellBlast");

class SpellBlast extends SpellBlastBase {
  constructor (game) {
    super(game, "Spell Blast", "Limited Edition Beta", "LEB");
  }
}

module.exports = SpellBlast;
