"use strict";
const Constants = require ("../../../Constants");
const ShockBase = require("../setBTD/Shock");

class Shock extends ShockBase {
  constructor (game) {
    super(game, "Shock", "Tenth Edition", "10E");
  }
}

module.exports = Shock;
