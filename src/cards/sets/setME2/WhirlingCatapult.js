"use strict";
const Constants = require ("../../../Constants");
const WhirlingCatapultBase = require("../setALL/WhirlingCatapult");

class WhirlingCatapult extends WhirlingCatapultBase {
  constructor (game) {
    super(game, "Whirling Catapult", "Masters Edition II", "ME2");
  }
}

module.exports = WhirlingCatapult;
