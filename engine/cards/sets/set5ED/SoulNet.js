"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SoulNetBase = require("../set6ED/SoulNet.js");

class SoulNet extends SoulNetBase {
  constructor(game) {
    super(game, "Soul Net", "Fifth Edition", "5ED");
  }
}

module.exports = SoulNet;
