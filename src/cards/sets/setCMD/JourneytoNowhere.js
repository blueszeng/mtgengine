"use strict";
const Constants = require ("../../../Constants");
const JourneytoNowhereBase = require("../setDDF/JourneytoNowhere");

class JourneytoNowhere extends JourneytoNowhereBase {
  constructor (game) {
    super(game, "Journey to Nowhere", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = JourneytoNowhere;
