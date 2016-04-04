"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MasticoreBase = require("../setV10/Masticore.js");

class Masticore extends MasticoreBase {
  constructor(game) {
    super(game, "Masticore", "Urza's Destiny", "UDS");
  }
}

module.exports = Masticore;
