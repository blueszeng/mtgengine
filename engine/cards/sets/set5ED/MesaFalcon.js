"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MesaFalconBase = require("../set6ED/MesaFalcon.js");

class MesaFalcon extends MesaFalconBase {
  constructor(game) {
    super(game, "Mesa Falcon", "Fifth Edition", "5ED");
  }
}

module.exports = MesaFalcon;
