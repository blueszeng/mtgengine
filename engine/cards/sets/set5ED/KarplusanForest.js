"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KarplusanForestBase = require("../set6ED/KarplusanForest.js");

class KarplusanForest extends KarplusanForestBase {
  constructor(game) {
    super(game, "Karplusan Forest", "Fifth Edition", "5ED");
  }
}

module.exports = KarplusanForest;
