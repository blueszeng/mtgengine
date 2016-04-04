"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FalseProphetBase = require("../setCMD/FalseProphet.js");

class FalseProphet extends FalseProphetBase {
  constructor(game) {
    super(game, "False Prophet", "Urza's Destiny", "UDS");
  }
}

module.exports = FalseProphet;
