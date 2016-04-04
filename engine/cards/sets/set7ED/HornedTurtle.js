"use strict";
const Constants = require ("../../../Constants");
const HornedTurtleBase = require("../set6ED/HornedTurtle");

class HornedTurtle extends HornedTurtleBase {
  constructor(game) {
    super(game, "Horned Turtle", "Seventh Edition", "7ED");
  }
}

module.exports = HornedTurtle;
