"use strict";
const Constants = require ("../../../Constants");
const MindControlBase = require("../setDPA/MindControl");

class MindControl extends MindControlBase {
  constructor (game) {
    super(game, "Mind Control", "Magic 2012", "M12");
  }
}

module.exports = MindControl;
