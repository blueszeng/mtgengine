"use strict";
const Constants = require ("../../../Constants");
const EvilPresenceBase = require("../setCED/EvilPresence");

class EvilPresence extends EvilPresenceBase {
  constructor (game) {
    super(game, "Evil Presence", "Limited Edition Beta", "LEB");
  }
}

module.exports = EvilPresence;
