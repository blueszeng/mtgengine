"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ProfaneMemento extends Card {
  constructor(game) {
    super(game, "Profane Memento", "Magic 2015 Core Set", "M15");
  }
}

module.exports = ProfaneMemento;
