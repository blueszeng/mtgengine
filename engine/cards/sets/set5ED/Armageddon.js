"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArmageddonBase = require("../setATH/Armageddon.js");

class Armageddon extends ArmageddonBase {
  constructor(game) {
    super(game, "Armageddon", "Fifth Edition", "5ED");
  }
}

module.exports = Armageddon;
