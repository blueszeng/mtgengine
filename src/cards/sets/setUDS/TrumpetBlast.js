"use strict";
const Constants = require ("../../../Constants");
const TrumpetBlastBase = require("../setKTK/TrumpetBlast");

class TrumpetBlast extends TrumpetBlastBase {
  constructor (game) {
    super(game, "Trumpet Blast", "Urza's Destiny", "UDS");
  }
}

module.exports = TrumpetBlast;
