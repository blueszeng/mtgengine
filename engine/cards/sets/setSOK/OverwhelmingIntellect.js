"use strict";
const Constants = require ("../../../Constants");
const OverwhelmingIntellectBase = require("../setDDJ/OverwhelmingIntellect");

class OverwhelmingIntellect extends OverwhelmingIntellectBase {
  constructor(game) {
    super(game, "Overwhelming Intellect", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = OverwhelmingIntellect;
