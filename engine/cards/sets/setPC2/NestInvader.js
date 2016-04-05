"use strict";
const Constants = require ("../../../Constants");
const NestInvaderBase = require("../setMM2/NestInvader");

class NestInvader extends NestInvaderBase {
  constructor(game) {
    super(game, "Nest Invader", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = NestInvader;
