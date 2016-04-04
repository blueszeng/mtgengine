"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JwarIsleRefugeBase = require("../setC13/JwarIsleRefuge.js");

class JwarIsleRefuge extends JwarIsleRefugeBase {
  constructor(game) {
    super(game, "Jwar Isle Refuge", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = JwarIsleRefuge;
