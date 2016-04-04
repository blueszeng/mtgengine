"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DaggerclawImpBase = require("../setDD3_DVD/DaggerclawImp.js");

class DaggerclawImp extends DaggerclawImpBase {
  constructor(game) {
    super(game, "Daggerclaw Imp", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = DaggerclawImp;
