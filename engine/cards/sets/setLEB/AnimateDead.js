"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AnimateDeadBase = require("../setCED/AnimateDead.js");

class AnimateDead extends AnimateDeadBase {
  constructor(game) {
    super(game, "Animate Dead", "Limited Edition Beta", "LEB");
  }
}

module.exports = AnimateDead;
