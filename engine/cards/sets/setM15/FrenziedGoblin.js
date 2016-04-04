"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FrenziedGoblinBase = require("../setDDN/FrenziedGoblin.js");

class FrenziedGoblin extends FrenziedGoblinBase {
  constructor(game) {
    super(game, "Frenzied Goblin", "Magic 2015 Core Set", "M15");
  }
}

module.exports = FrenziedGoblin;
