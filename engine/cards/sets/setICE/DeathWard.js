"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeathWardBase = require("../setCED/DeathWard.js");

class DeathWard extends DeathWardBase {
  constructor(game) {
    super(game, "Death Ward", "Ice Age", "ICE");
  }
}

module.exports = DeathWard;
