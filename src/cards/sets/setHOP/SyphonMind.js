"use strict";
const Constants = require ("../../../Constants");
const SyphonMindBase = require("../setC14/SyphonMind");

class SyphonMind extends SyphonMindBase {
  constructor (game) {
    super(game, "Syphon Mind", "Planechase", "HOP");
  }
}

module.exports = SyphonMind;
