"use strict";
const Constants = require ("../../../Constants");
const ThirstforKnowledgeBase = require("../setDDF/ThirstforKnowledge");

class ThirstforKnowledge extends ThirstforKnowledgeBase {
  constructor (game) {
    super(game, "Thirst for Knowledge", "Planechase", "HOP");
  }
}

module.exports = ThirstforKnowledge;
