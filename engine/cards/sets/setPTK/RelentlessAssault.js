"use strict";
const Constants = require ("../../../Constants");
const RelentlessAssaultBase = require("../set6ED/RelentlessAssault");

class RelentlessAssault extends RelentlessAssaultBase {
  constructor(game) {
    super(game, "Relentless Assault", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = RelentlessAssault;
