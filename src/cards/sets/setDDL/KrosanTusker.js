"use strict";
const Constants = require ("../../../Constants");
const KrosanTuskerBase = require("../setARC/KrosanTusker");

class KrosanTusker extends KrosanTuskerBase {
  constructor (game) {
    super(game, "Krosan Tusker", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = KrosanTusker;
