"use strict";
const Constants = require ("../../../Constants");
const YokeoftheDamnedBase = require("../setCON/YokeoftheDamned");

class YokeoftheDamned extends YokeoftheDamnedBase {
  constructor (game) {
    super(game, "Yoke of the Damned", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = YokeoftheDamned;
