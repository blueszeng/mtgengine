"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GloomBase = require("../setCED/Gloom.js");

class Gloom extends GloomBase {
  constructor(game) {
    super(game, "Gloom", "Masters Edition IV", "ME4");
  }
}

module.exports = Gloom;
