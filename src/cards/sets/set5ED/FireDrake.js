"use strict";
const Constants = require ("../../../Constants");
const FireDrakeBase = require("../setCHR/FireDrake");

class FireDrake extends FireDrakeBase {
  constructor (game) {
    super(game, "Fire Drake", "Fifth Edition", "5ED");
  }
}

module.exports = FireDrake;
