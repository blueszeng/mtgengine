"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Rootrunner extends Card {
  constructor(game) {
    super(game, "Rootrunner", "Champions of Kamigawa", "CHK");
  }
}

module.exports = Rootrunner;
