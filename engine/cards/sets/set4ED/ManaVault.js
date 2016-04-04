"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ManaVaultBase = require("../setCED/ManaVault.js");

class ManaVault extends ManaVaultBase {
  constructor(game) {
    super(game, "Mana Vault", "Fourth Edition", "4ED");
  }
}

module.exports = ManaVault;
