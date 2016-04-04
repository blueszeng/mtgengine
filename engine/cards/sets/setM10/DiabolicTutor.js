"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DiabolicTutorBase = require("../set8ED/DiabolicTutor.js");

class DiabolicTutor extends DiabolicTutorBase {
  constructor(game) {
    super(game, "Diabolic Tutor", "Magic 2010", "M10");
  }
}

module.exports = DiabolicTutor;
