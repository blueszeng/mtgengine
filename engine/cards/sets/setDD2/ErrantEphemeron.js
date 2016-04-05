"use strict";
const Constants = require ("../../../Constants");
const ErrantEphemeronBase = require("../setDD3_JVC/ErrantEphemeron");

class ErrantEphemeron extends ErrantEphemeronBase {
  constructor(game) {
    super(game, "Errant Ephemeron", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = ErrantEphemeron;
