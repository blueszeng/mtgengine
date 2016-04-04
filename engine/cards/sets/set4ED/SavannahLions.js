"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SavannahLionsBase = require("../setCED/SavannahLions.js");

class SavannahLions extends SavannahLionsBase {
  constructor(game) {
    super(game, "Savannah Lions", "Fourth Edition", "4ED");
  }
}

module.exports = SavannahLions;
