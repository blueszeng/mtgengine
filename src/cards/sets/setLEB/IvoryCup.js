"use strict";
const Constants = require ("../../../Constants");
const IvoryCupBase = require("../set6ED/IvoryCup");

class IvoryCup extends IvoryCupBase {
  constructor (game) {
    super(game, "Ivory Cup", "Limited Edition Beta", "LEB");
  }
}

module.exports = IvoryCup;
