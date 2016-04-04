"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TaigaBase = require("../setCED/Taiga.js");

class Taiga extends TaigaBase {
  constructor(game) {
    super(game, "Taiga", "Unlimited Edition", "2ED");
  }
}

module.exports = Taiga;
