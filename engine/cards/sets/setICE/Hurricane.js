"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HurricaneBase = require("../setATH/Hurricane.js");

class Hurricane extends HurricaneBase {
  constructor(game) {
    super(game, "Hurricane", "Ice Age", "ICE");
  }
}

module.exports = Hurricane;
