"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MysticalTutor extends Card {
  constructor(game) {
    super(game, "Mystical Tutor", "Classic Sixth Edition", "6ED");
  }
}

module.exports = MysticalTutor;
