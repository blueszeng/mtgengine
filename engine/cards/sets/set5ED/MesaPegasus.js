"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MesaPegasusBase = require("../setCED/MesaPegasus.js");

class MesaPegasus extends MesaPegasusBase {
  constructor(game) {
    super(game, "Mesa Pegasus", "Fifth Edition", "5ED");
  }
}

module.exports = MesaPegasus;
