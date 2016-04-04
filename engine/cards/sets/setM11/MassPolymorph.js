"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MassPolymorph extends Card {
  constructor(game) {
    super(game, "Mass Polymorph", "Magic 2011", "M11");
  }
}

module.exports = MassPolymorph;
