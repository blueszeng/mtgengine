"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThroneofBoneBase = require("../set6ED/ThroneofBone.js");

class ThroneofBone extends ThroneofBoneBase {
  constructor(game) {
    super(game, "Throne of Bone", "Collector's Edition", "CED");
  }
}

module.exports = ThroneofBone;
