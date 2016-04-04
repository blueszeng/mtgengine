"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ApprenticeWizard extends Card {
  constructor(game) {
    super(game, "Apprentice Wizard", "Fourth Edition", "4ED");
  }
}

module.exports = ApprenticeWizard;
