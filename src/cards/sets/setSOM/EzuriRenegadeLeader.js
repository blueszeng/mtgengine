"use strict";
const Constants = require ("../../../Constants");
const EzuriRenegadeLeaderBase = require("../setC14/EzuriRenegadeLeader");

class EzuriRenegadeLeader extends EzuriRenegadeLeaderBase {
  constructor (game) {
    super(game, "Ezuri, Renegade Leader", "Scars of Mirrodin", "SOM");
  }
}

module.exports = EzuriRenegadeLeader;
