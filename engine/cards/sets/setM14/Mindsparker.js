"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Mindsparker extends Card {
  constructor(game) {
    super(game, "Mindsparker", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Mindsparker;
