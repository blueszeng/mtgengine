"use strict";
const Constants = require ("../../../Constants");
const JalumTomeBase = require("../setATH/JalumTome");

class JalumTome extends JalumTomeBase {
  constructor (game) {
    super(game, "Jalum Tome", "Antiquities", "ATQ");
  }
}

module.exports = JalumTome;
