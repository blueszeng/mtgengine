"use strict";
const Constants = require ("../../../Constants");
const AkromaAngelofWrathBase = require("../setDD3_DVD/AkromaAngelofWrath");

class AkromaAngelofWrath extends AkromaAngelofWrathBase {
  constructor(game) {
    super(game, "Akroma, Angel of Wrath", "Legions", "LGN");
  }
}

module.exports = AkromaAngelofWrath;
