"use strict";
const Constants = require ("../../../Constants");
const NantukoShadeBase = require("../setC14/NantukoShade");

class NantukoShade extends NantukoShadeBase {
  constructor (game) {
    super(game, "Nantuko Shade", "Magic 2011", "M11");
  }
}

module.exports = NantukoShade;
