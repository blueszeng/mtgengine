"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KrosanGripBase = require("../setC13/KrosanGrip.js");

class KrosanGrip extends KrosanGripBase {
  constructor(game) {
    super(game, "Krosan Grip", "Commander 2015", "C15");
  }
}

module.exports = KrosanGrip;
