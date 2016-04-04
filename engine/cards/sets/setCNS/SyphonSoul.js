"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SyphonSoulBase = require("../setBRB/SyphonSoul.js");

class SyphonSoul extends SyphonSoulBase {
  constructor(game) {
    super(game, "Syphon Soul", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = SyphonSoul;
