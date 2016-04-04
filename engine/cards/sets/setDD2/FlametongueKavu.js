"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FlametongueKavuBase = require("../setC14/FlametongueKavu.js");

class FlametongueKavu extends FlametongueKavuBase {
  constructor(game) {
    super(game, "Flametongue Kavu", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = FlametongueKavu;
