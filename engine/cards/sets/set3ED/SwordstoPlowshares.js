"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SwordstoPlowsharesBase = require("../setATH/SwordstoPlowshares.js");

class SwordstoPlowshares extends SwordstoPlowsharesBase {
  constructor(game) {
    super(game, "Swords to Plowshares", "Revised Edition", "3ED");
  }
}

module.exports = SwordstoPlowshares;
