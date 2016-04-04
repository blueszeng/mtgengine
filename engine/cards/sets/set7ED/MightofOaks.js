"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MightofOaksBase = require("../set8ED/MightofOaks.js");

class MightofOaks extends MightofOaksBase {
  constructor(game) {
    super(game, "Might of Oaks", "Seventh Edition", "7ED");
  }
}

module.exports = MightofOaks;
