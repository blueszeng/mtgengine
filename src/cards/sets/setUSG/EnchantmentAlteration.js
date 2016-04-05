"use strict";
const Constants = require ("../../../Constants");
const EnchantmentAlterationBase = require("../setCHR/EnchantmentAlteration");

class EnchantmentAlteration extends EnchantmentAlterationBase {
  constructor(game) {
    super(game, "Enchantment Alteration", "Urza's Saga", "USG");
  }
}

module.exports = EnchantmentAlteration;