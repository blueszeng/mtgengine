"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GolgariGuildgateBase = require("../setC13/GolgariGuildgate.js");

class GolgariGuildgate extends GolgariGuildgateBase {
  constructor(game) {
    super(game, "Golgari Guildgate", "Return to Ravnica", "RTR");
  }
}

module.exports = GolgariGuildgate;
