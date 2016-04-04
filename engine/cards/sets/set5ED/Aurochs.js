"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AurochsBase = require("../setCST/Aurochs.js");

class Aurochs extends AurochsBase {
  constructor(game) {
    super(game, "Aurochs", "Fifth Edition", "5ED");
  }
}

module.exports = Aurochs;
