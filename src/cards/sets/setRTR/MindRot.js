"use strict";
const Constants = require ("../../../Constants");
const MindRotBase = require("../setDTK/MindRot");

class MindRot extends MindRotBase {
  constructor (game) {
    super(game, "Mind Rot", "Return to Ravnica", "RTR");
  }
}

module.exports = MindRot;
