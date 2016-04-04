"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MightyLeapBase = require("../setDDO/MightyLeap.js");

class MightyLeap extends MightyLeapBase {
  constructor(game) {
    super(game, "Mighty Leap", "Magic 2012", "M12");
  }
}

module.exports = MightyLeap;
