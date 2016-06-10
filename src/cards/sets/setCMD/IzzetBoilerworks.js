"use strict";
const Constants = require ("../../../Constants");
const IzzetBoilerworksBase = require("../setC13/IzzetBoilerworks");

class IzzetBoilerworks extends IzzetBoilerworksBase {
  constructor (game) {
    super(game, "Izzet Boilerworks", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = IzzetBoilerworks;
