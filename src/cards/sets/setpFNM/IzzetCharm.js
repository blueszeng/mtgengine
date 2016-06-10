"use strict";
const Constants = require ("../../../Constants");
const IzzetCharmBase = require("../setDDJ/IzzetCharm");

class IzzetCharm extends IzzetCharmBase {
  constructor (game) {
    super(game, "Izzet Charm", "Friday Night Magic", "pFNM");
  }
}

module.exports = IzzetCharm;
