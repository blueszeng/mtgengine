"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DarigaazsAttendant extends Card {
  constructor(game) {
    super(game, "Darigaaz's Attendant", "Invasion", "INV");
  }
}

module.exports = DarigaazsAttendant;
