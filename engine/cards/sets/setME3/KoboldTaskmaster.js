"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KoboldTaskmasterBase = require("../setLEG/KoboldTaskmaster.js");

class KoboldTaskmaster extends KoboldTaskmasterBase {
  constructor(game) {
    super(game, "Kobold Taskmaster", "Masters Edition III", "ME3");
  }
}

module.exports = KoboldTaskmaster;
