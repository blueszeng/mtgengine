"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IndulgentTormentorBase = require("../setM15/IndulgentTormentor.js");

class IndulgentTormentor extends IndulgentTormentorBase {
  constructor(game) {
    super(game, "Indulgent Tormentor", "Prerelease Events", "pPRE");
  }
}

module.exports = IndulgentTormentor;
