"use strict";
const Constants = require ("../../../Constants");
const MindBombBase = require("../set5ED/MindBomb");

class MindBomb extends MindBombBase {
  constructor(game) {
    super(game, "Mind Bomb", "The Dark", "DRK");
  }
}

module.exports = MindBomb;
