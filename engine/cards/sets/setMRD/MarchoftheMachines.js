"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MarchoftheMachinesBase = require("../setARC/MarchoftheMachines.js");

class MarchoftheMachines extends MarchoftheMachinesBase {
  constructor(game) {
    super(game, "March of the Machines", "Mirrodin", "MRD");
  }
}

module.exports = MarchoftheMachines;
