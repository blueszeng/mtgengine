"use strict";
const Constants = require ("../../../Constants");
const ArmageddonBase = require("../setATH/Armageddon");

class Armageddon extends ArmageddonBase {
  constructor (game) {
    super(game, "Armageddon", "From the Vault: Annihilation (2014)", "V14");
  }
}

module.exports = Armageddon;
