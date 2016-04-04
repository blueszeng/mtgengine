"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeraldofWar extends Card {
  constructor(game) {
    super(game, "Herald of War", "Avacyn Restored", "AVR");
  }
}

module.exports = HeraldofWar;
