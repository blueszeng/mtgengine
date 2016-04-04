"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VeilofSecrecy extends Card {
  constructor(game) {
    super(game, "Veil of Secrecy", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = VeilofSecrecy;
