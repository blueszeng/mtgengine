"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EnormousBalothBase = require("../set8ED/EnormousBaloth.js");

class EnormousBaloth extends EnormousBalothBase {
  constructor(game) {
    super(game, "Enormous Baloth", "Tenth Edition", "10E");
  }
}

module.exports = EnormousBaloth;
