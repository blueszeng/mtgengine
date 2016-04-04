"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HymntoTourachBase = require("../setATH/HymntoTourach.js");

class HymntoTourach extends HymntoTourachBase {
  constructor(game) {
    super(game, "Hymn to Tourach", "Vintage Masters", "VMA");
  }
}

module.exports = HymntoTourach;
