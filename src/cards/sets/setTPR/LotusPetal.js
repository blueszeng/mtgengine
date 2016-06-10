"use strict";
const Constants = require ("../../../Constants");
const LotusPetalBase = require("../setV09/LotusPetal");

class LotusPetal extends LotusPetalBase {
  constructor (game) {
    super(game, "Lotus Petal", "Tempest Remastered", "TPR");
  }
}

module.exports = LotusPetal;
