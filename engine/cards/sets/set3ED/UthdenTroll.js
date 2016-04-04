"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UthdenTrollBase = require("../setATH/UthdenTroll.js");

class UthdenTroll extends UthdenTrollBase {
  constructor(game) {
    super(game, "Uthden Troll", "Revised Edition", "3ED");
  }
}

module.exports = UthdenTroll;
