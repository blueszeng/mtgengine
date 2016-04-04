"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SelesnyaSignetBase = require("../setC13/SelesnyaSignet.js");

class SelesnyaSignet extends SelesnyaSignetBase {
  constructor(game) {
    super(game, "Selesnya Signet", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = SelesnyaSignet;
