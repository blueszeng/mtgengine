"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DromokasCommand extends Card {
  constructor(game) {
    super(game, "Dromoka's Command", "Dragons of Tarkir", "DTK");
  }
}

module.exports = DromokasCommand;
