"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThousandWindsBase = require("../setDDN/ThousandWinds.js");

class ThousandWinds extends ThousandWindsBase {
  constructor(game) {
    super(game, "Thousand Winds", "Prerelease Events", "pPRE");
  }
}

module.exports = ThousandWinds;
