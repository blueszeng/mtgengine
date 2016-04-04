"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LilianaVessBase = require("../setDD3_GVL/LilianaVess.js");

class LilianaVess extends LilianaVessBase {
  constructor(game) {
    super(game, "Liliana Vess", "Magic 2011", "M11");
  }
}

module.exports = LilianaVess;
