"use strict";
const Constants = require ("../../../Constants");
const CrumbleBase = require("../setATQ/Crumble");

class Crumble extends CrumbleBase {
  constructor (game) {
    super(game, "Crumble", "Masters Edition IV", "ME4");
  }
}

module.exports = Crumble;
