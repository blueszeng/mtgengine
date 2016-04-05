"use strict";
const Constants = require ("../../../Constants");
const FogBase = require("../setARC/Fog");

class Fog extends FogBase {
  constructor(game) {
    super(game, "Fog", "Limited Edition Beta", "LEB");
  }
}

module.exports = Fog;
