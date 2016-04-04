"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RedElementalBlastBase = require("../setCED/RedElementalBlast.js");

class RedElementalBlast extends RedElementalBlastBase {
  constructor(game) {
    super(game, "Red Elemental Blast", "Limited Edition Beta", "LEB");
  }
}

module.exports = RedElementalBlast;
