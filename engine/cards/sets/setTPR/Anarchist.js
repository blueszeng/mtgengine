"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AnarchistBase = require("../setEXO/Anarchist.js");

class Anarchist extends AnarchistBase {
  constructor(game) {
    super(game, "Anarchist", "Tempest Remastered", "TPR");
  }
}

module.exports = Anarchist;
