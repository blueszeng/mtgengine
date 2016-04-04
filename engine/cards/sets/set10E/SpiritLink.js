"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpiritLinkBase = require("../set6ED/SpiritLink.js");

class SpiritLink extends SpiritLinkBase {
  constructor(game) {
    super(game, "Spirit Link", "Tenth Edition", "10E");
  }
}

module.exports = SpiritLink;
