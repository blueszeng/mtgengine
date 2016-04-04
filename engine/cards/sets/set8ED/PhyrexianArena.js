"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhyrexianArenaBase = require("../setAPC/PhyrexianArena.js");

class PhyrexianArena extends PhyrexianArenaBase {
  constructor(game) {
    super(game, "Phyrexian Arena", "Eighth Edition", "8ED");
  }
}

module.exports = PhyrexianArena;
