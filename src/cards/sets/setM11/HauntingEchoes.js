"use strict";
const Constants = require ("../../../Constants");
const HauntingEchoesBase = require("../setM10/HauntingEchoes");

class HauntingEchoes extends HauntingEchoesBase {
  constructor (game) {
    super(game, "Haunting Echoes", "Magic 2011", "M11");
  }
}

module.exports = HauntingEchoes;
