"use strict";
const Constants = require ("../../../Constants");
const MillstoneBase = require("../setATQ/Millstone");

class Millstone extends MillstoneBase {
  constructor (game) {
    super(game, "Millstone", "Fifth Edition", "5ED");
  }
}

module.exports = Millstone;
