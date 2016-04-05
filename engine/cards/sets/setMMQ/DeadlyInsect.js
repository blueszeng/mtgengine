"use strict";
const Constants = require ("../../../Constants");
const DeadlyInsectBase = require("../setALL/DeadlyInsect");

class DeadlyInsect extends DeadlyInsectBase {
  constructor(game) {
    super(game, "Deadly Insect", "Mercadian Masques", "MMQ");
  }
}

module.exports = DeadlyInsect;
