"use strict";
const Constants = require ("../../../Constants");
const ManaVaultBase = require("../setCED/ManaVault");

class ManaVault extends ManaVaultBase {
  constructor (game) {
    super(game, "Mana Vault", "Limited Edition Alpha", "LEA");
  }
}

module.exports = ManaVault;
