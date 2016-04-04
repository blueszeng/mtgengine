"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KudzuBase = require("../setCED/Kudzu.js");

class Kudzu extends KudzuBase {
  constructor(game) {
    super(game, "Kudzu", "Masters Edition IV", "ME4");
  }
}

module.exports = Kudzu;
