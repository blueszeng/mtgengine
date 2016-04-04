"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArchitectsofWillBase = require("../setARB/ArchitectsofWill.js");

class ArchitectsofWill extends ArchitectsofWillBase {
  constructor(game) {
    super(game, "Architects of Will", "Archenemy", "ARC");
  }
}

module.exports = ArchitectsofWill;
