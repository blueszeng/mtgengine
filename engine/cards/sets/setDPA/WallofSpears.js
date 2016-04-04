"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WallofSpearsBase = require("../setATQ/WallofSpears.js");

class WallofSpears extends WallofSpearsBase {
  constructor(game) {
    super(game, "Wall of Spears", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = WallofSpears;
