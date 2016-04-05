"use strict";
const Constants = require ("../../../Constants");
const ScouredBarrensBase = require("../setC15/ScouredBarrens");

class ScouredBarrens extends ScouredBarrensBase {
  constructor(game) {
    super(game, "Scoured Barrens", "Khans of Tarkir", "KTK");
  }
}

module.exports = ScouredBarrens;
