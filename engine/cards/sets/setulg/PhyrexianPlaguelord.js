"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhyrexianPlaguelordBase = require("../setC15/PhyrexianPlaguelord.js");

class PhyrexianPlaguelord extends PhyrexianPlaguelordBase {
  constructor(game) {
    super(game, "Phyrexian Plaguelord", "Urza's Legacy", "ULG");
  }
}

module.exports = PhyrexianPlaguelord;
