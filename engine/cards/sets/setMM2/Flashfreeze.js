"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FlashfreezeBase = require("../setCSP/Flashfreeze.js");

class Flashfreeze extends FlashfreezeBase {
  constructor(game) {
    super(game, "Flashfreeze", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = Flashfreeze;
