"use strict";
const Constants = require ("../../../Constants");
const HurricaneBase = require("../setATH/Hurricane");

class Hurricane extends HurricaneBase {
  constructor (game) {
    super(game, "Hurricane", "Ice Age", "ICE");
  }
}

module.exports = Hurricane;
