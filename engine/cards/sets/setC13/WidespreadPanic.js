"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WidespreadPanic extends Card {
  constructor(game) {
    super(game, "Widespread Panic", "Commander 2013 Edition", "C13");
  }
}

module.exports = WidespreadPanic;
