"use strict";
const Constants = require ("../../../Constants");
const PsionicBlastBase = require("../setCED/PsionicBlast");

class PsionicBlast extends PsionicBlastBase {
  constructor (game) {
    super(game, "Psionic Blast", "Unlimited Edition", "2ED");
  }
}

module.exports = PsionicBlast;
