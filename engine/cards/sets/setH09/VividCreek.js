"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VividCreekBase = require("../setC13/VividCreek.js");

class VividCreek extends VividCreekBase {
  constructor(game) {
    super(game, "Vivid Creek", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = VividCreek;
