"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FalseMourning extends Card {
  constructor(game) {
    super(game, "False Mourning", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = FalseMourning;
