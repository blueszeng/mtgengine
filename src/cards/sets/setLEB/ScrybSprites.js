"use strict";
const Constants = require ("../../../Constants");
const ScrybSpritesBase = require("../setBRB/ScrybSprites");

class ScrybSprites extends ScrybSpritesBase {
  constructor (game) {
    super(game, "Scryb Sprites", "Limited Edition Beta", "LEB");
  }
}

module.exports = ScrybSprites;
