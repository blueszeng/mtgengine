"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EarwigSquadBase = require("../setpLPA/EarwigSquad.js");

class EarwigSquad extends EarwigSquadBase {
  constructor(game) {
    super(game, "Earwig Squad", "Modern Masters", "MMA");
  }
}

module.exports = EarwigSquad;
