"use strict";
const Constants = require ("../../../Constants");
const InfernoBase = require("../set6ED/Inferno");

class Inferno extends InfernoBase {
  constructor(game) {
    super(game, "Inferno", "The Dark", "DRK");
  }
}

module.exports = Inferno;