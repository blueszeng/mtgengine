"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PacifismBase = require("../setATH/Pacifism.js");

class Pacifism extends PacifismBase {
  constructor(game) {
    super(game, "Pacifism", "Magic 2011", "M11");
  }
}

module.exports = Pacifism;
