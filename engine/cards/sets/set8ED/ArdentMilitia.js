"use strict";
const Constants = require ("../../../Constants");
const ArdentMilitiaBase = require("../set6ED/ArdentMilitia");

class ArdentMilitia extends ArdentMilitiaBase {
  constructor(game) {
    super(game, "Ardent Militia", "Eighth Edition", "8ED");
  }
}

module.exports = ArdentMilitia;
