"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Wellwisher extends Card {
  constructor(game) {
    super(game, "Wellwisher", "Commander 2014", "C14");
  }
}

module.exports = Wellwisher;
