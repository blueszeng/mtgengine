"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DuressBase = require("../setpARL/Duress.js");

class Duress extends DuressBase {
  constructor(game) {
    super(game, "Duress", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = Duress;
