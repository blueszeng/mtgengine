"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UnstableMutationBase = require("../setARN/UnstableMutation.js");

class UnstableMutation extends UnstableMutationBase {
  constructor(game) {
    super(game, "Unstable Mutation", "Fourth Edition", "4ED");
  }
}

module.exports = UnstableMutation;
