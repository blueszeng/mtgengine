"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MagusoftheUnseenBase = require("../set5ED/MagusoftheUnseen.js");

class MagusoftheUnseen extends MagusoftheUnseenBase {
  constructor(game) {
    super(game, "Magus of the Unseen", "Masters Edition II", "ME2");
  }
}

module.exports = MagusoftheUnseen;
