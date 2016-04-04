"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FlamesoftheBloodHandBase = require("../setBOK/FlamesoftheBloodHand.js");

class FlamesoftheBloodHand extends FlamesoftheBloodHandBase {
  constructor(game) {
    super(game, "Flames of the Blood Hand", "Premium Deck Series: Fire and Lightning", "PD2");
  }
}

module.exports = FlamesoftheBloodHand;
