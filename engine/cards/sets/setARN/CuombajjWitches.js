"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CuombajjWitchesBase = require("../setATH/CuombajjWitches.js");

class CuombajjWitches extends CuombajjWitchesBase {
  constructor(game) {
    super(game, "Cuombajj Witches", "Arabian Nights", "ARN");
  }
}

module.exports = CuombajjWitches;
