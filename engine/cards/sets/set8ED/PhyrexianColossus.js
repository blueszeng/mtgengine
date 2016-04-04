"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhyrexianColossusBase = require("../setDDE/PhyrexianColossus.js");

class PhyrexianColossus extends PhyrexianColossusBase {
  constructor(game) {
    super(game, "Phyrexian Colossus", "Eighth Edition", "8ED");
  }
}

module.exports = PhyrexianColossus;
