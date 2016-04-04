"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KrosanAvenger extends Card {
  constructor(game) {
    super(game, "Krosan Avenger", "Odyssey", "ODY");
  }
}

module.exports = KrosanAvenger;
