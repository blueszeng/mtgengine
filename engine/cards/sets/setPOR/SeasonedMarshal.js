"use strict";
const Constants = require ("../../../Constants");
const SeasonedMarshalBase = require("../setBRB/SeasonedMarshal");

class SeasonedMarshal extends SeasonedMarshalBase {
  constructor(game) {
    super(game, "Seasoned Marshal", "Portal", "POR");
  }
}

module.exports = SeasonedMarshal;
