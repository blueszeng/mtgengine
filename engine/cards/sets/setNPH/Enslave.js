"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EnslaveBase = require("../setDD3_GVL/Enslave.js");

class Enslave extends EnslaveBase {
  constructor(game) {
    super(game, "Enslave", "New Phyrexia", "NPH");
  }
}

module.exports = Enslave;
