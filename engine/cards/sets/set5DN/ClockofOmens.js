"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ClockofOmens extends Card {
  constructor(game) {
    super(game, "Clock of Omens", "Fifth Dawn", "5DN");
  }
}

module.exports = ClockofOmens;
