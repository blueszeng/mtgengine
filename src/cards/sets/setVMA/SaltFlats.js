"use strict";
const Constants = require ("../../../Constants");
const SaltFlatsBase = require("../setTMP/SaltFlats");

class SaltFlats extends SaltFlatsBase {
  constructor (game) {
    super(game, "Salt Flats", "Vintage Masters", "VMA");
  }
}

module.exports = SaltFlats;
