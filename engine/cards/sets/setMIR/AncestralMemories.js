"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AncestralMemoriesBase = require("../set6ED/AncestralMemories.js");

class AncestralMemories extends AncestralMemoriesBase {
  constructor(game) {
    super(game, "Ancestral Memories", "Mirage", "MIR");
  }
}

module.exports = AncestralMemories;
