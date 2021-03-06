"use strict";
const Constants = require ("../../../Constants");
const ImperiousPerfectBase = require("../setpCMP/ImperiousPerfect");

class ImperiousPerfect extends ImperiousPerfectBase {
  constructor (game) {
    super(game, "Imperious Perfect", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = ImperiousPerfect;
