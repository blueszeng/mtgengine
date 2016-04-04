"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StealArtifactBase = require("../setCED/StealArtifact.js");

class StealArtifact extends StealArtifactBase {
  constructor(game) {
    super(game, "Steal Artifact", "Fourth Edition", "4ED");
  }
}

module.exports = StealArtifact;
