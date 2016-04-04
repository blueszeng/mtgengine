"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DragonEngineBase = require("../setATQ/DragonEngine.js");

class DragonEngine extends DragonEngineBase {
  constructor(game) {
    super(game, "Dragon Engine", "Revised Edition", "3ED");
  }
}

module.exports = DragonEngine;
