"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OvereagerApprenticeBase = require("../setDD3_DVD/OvereagerApprentice.js");

class OvereagerApprentice extends OvereagerApprenticeBase {
  constructor(game) {
    super(game, "Overeager Apprentice", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = OvereagerApprentice;
