"use strict";
const Constants = require ("../../../Constants");
const AladdinsRingBase = require("../setARN/AladdinsRing");

class AladdinsRing extends AladdinsRingBase {
  constructor (game) {
    super(game, "Aladdin's Ring", "Fifth Edition", "5ED");
  }
}

module.exports = AladdinsRing;
