"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArmorofFaithBase = require("../set5ED/ArmorofFaith.js");

class ArmorofFaith extends ArmorofFaithBase {
  constructor(game) {
    super(game, "Armor of Faith", "Ice Age", "ICE");
  }
}

module.exports = ArmorofFaith;
