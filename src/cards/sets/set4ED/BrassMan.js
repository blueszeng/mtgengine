"use strict";
const Constants = require ("../../../Constants");
const BrassManBase = require("../setARN/BrassMan");

class BrassMan extends BrassManBase {
  constructor (game) {
    super(game, "Brass Man", "Fourth Edition", "4ED");
  }
}

module.exports = BrassMan;
