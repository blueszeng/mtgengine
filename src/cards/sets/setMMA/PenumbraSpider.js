"use strict";
const Constants = require ("../../../Constants");
const PenumbraSpiderBase = require("../setCMD/PenumbraSpider");

class PenumbraSpider extends PenumbraSpiderBase {
  constructor (game) {
    super(game, "Penumbra Spider", "Modern Masters", "MMA");
  }
}

module.exports = PenumbraSpider;
