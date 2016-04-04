"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RootwallaBase = require("../setM14/Rootwalla.js");

class Rootwalla extends RootwallaBase {
  constructor(game) {
    super(game, "Rootwalla", "Tempest Remastered", "TPR");
  }
}

module.exports = Rootwalla;
