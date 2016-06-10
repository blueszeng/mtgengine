"use strict";
const Constants = require ("../../../Constants");
const ElvishChampionBase = require("../setDPA/ElvishChampion");

class ElvishChampion extends ElvishChampionBase {
  constructor (game) {
    super(game, "Elvish Champion", "Invasion", "INV");
  }
}

module.exports = ElvishChampion;
