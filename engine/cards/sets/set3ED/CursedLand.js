"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CursedLandBase = require("../setCED/CursedLand.js");

class CursedLand extends CursedLandBase {
  constructor(game) {
    super(game, "Cursed Land", "Revised Edition", "3ED");
  }
}

module.exports = CursedLand;
