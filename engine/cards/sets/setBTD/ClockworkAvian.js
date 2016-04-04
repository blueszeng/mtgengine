"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ClockworkAvianBase = require("../setATQ/ClockworkAvian.js");

class ClockworkAvian extends ClockworkAvianBase {
  constructor(game) {
    super(game, "Clockwork Avian", "Beatdown Box Set", "BTD");
  }
}

module.exports = ClockworkAvian;
