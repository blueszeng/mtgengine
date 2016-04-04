"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StunBase = require("../setINV/Stun.js");

class Stun extends StunBase {
  constructor(game) {
    super(game, "Stun", "Tempest Remastered", "TPR");
  }
}

module.exports = Stun;
