"use strict";
const Constants = require ("../../../Constants");
const ForcefieldBase = require("../setCED/Forcefield");

class Forcefield extends ForcefieldBase {
  constructor (game) {
    super(game, "Forcefield", "Unlimited Edition", "2ED");
  }
}

module.exports = Forcefield;
