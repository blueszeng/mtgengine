"use strict";
const Constants = require ("../../../Constants");
const SlithFirewalkerBase = require("../setDD3_JVC/SlithFirewalker");

class SlithFirewalker extends SlithFirewalkerBase {
  constructor (game) {
    super(game, "Slith Firewalker", "Super Series", "pSUS");
  }
}

module.exports = SlithFirewalker;
