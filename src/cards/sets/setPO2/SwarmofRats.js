"use strict";
const Constants = require ("../../../Constants");
const SwarmofRatsBase = require("../set8ED/SwarmofRats");

class SwarmofRats extends SwarmofRatsBase {
  constructor (game) {
    super(game, "Swarm of Rats", "Portal Second Age", "PO2");
  }
}

module.exports = SwarmofRats;
