"use strict";
const Constants = require ("../../../Constants");
const DauthiSlayerBase = require("../setpARL/DauthiSlayer");

class DauthiSlayer extends DauthiSlayerBase {
  constructor(game) {
    super(game, "Dauthi Slayer", "Tempest Remastered", "TPR");
  }
}

module.exports = DauthiSlayer;
