"use strict";
const Constants = require ("../../../Constants");
const MengHuosHordeBase = require("../setME3/MengHuosHorde");

class MengHuosHorde extends MengHuosHordeBase {
  constructor (game) {
    super(game, "Meng Huo's Horde", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = MengHuosHorde;
