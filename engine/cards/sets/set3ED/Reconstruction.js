"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ReconstructionBase = require("../setATQ/Reconstruction.js");

class Reconstruction extends ReconstructionBase {
  constructor(game) {
    super(game, "Reconstruction", "Revised Edition", "3ED");
  }
}

module.exports = Reconstruction;
