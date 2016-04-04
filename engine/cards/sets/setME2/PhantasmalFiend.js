"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhantasmalFiendBase = require("../setALL/PhantasmalFiend.js");

class PhantasmalFiend extends PhantasmalFiendBase {
  constructor(game) {
    super(game, "Phantasmal Fiend", "Masters Edition II", "ME2");
  }
}

module.exports = PhantasmalFiend;
