"use strict";
const Constants = require ("../../../Constants");
const RatchetBombBase = require("../setM14/RatchetBomb");

class RatchetBomb extends RatchetBombBase {
  constructor (game) {
    super(game, "Ratchet Bomb", "Scars of Mirrodin", "SOM");
  }
}

module.exports = RatchetBomb;
