"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SeismicStrike extends Card {
  constructor(game) {
    super(game, "Seismic Strike", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = SeismicStrike;
