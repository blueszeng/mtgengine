"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VitalSplicer extends UnimplementedCard {
  constructor (game) {
    super(game, "Vital Splicer", "New Phyrexia", "NPH");
  }
}

module.exports = VitalSplicer;
