"use strict";
const Constants = require ("../../../Constants");
const OverrunBase = require("../setATH/Overrun");

class Overrun extends OverrunBase {
  constructor(game) {
    super(game, "Overrun", "Odyssey", "ODY");
  }
}

module.exports = Overrun;
