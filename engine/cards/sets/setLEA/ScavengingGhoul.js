"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ScavengingGhoulBase = require("../setCED/ScavengingGhoul.js");

class ScavengingGhoul extends ScavengingGhoulBase {
  constructor(game) {
    super(game, "Scavenging Ghoul", "Limited Edition Alpha", "LEA");
  }
}

module.exports = ScavengingGhoul;
