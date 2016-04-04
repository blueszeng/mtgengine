"use strict";
const Constants = require ("../../../Constants");
const KjeldoranDeadBase = require("../set6ED/KjeldoranDead");

class KjeldoranDead extends KjeldoranDeadBase {
  constructor(game) {
    super(game, "Kjeldoran Dead", "Ice Age", "ICE");
  }
}

module.exports = KjeldoranDead;
