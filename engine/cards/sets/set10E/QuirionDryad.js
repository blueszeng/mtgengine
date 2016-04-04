"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const QuirionDryadBase = require("../setM13/QuirionDryad.js");

class QuirionDryad extends QuirionDryadBase {
  constructor(game) {
    super(game, "Quirion Dryad", "Tenth Edition", "10E");
  }
}

module.exports = QuirionDryad;
