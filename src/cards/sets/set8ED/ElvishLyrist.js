"use strict";
const Constants = require ("../../../Constants");
const ElvishLyristBase = require("../setBRB/ElvishLyrist");

class ElvishLyrist extends ElvishLyristBase {
  constructor (game) {
    super(game, "Elvish Lyrist", "Eighth Edition", "8ED");
  }
}

module.exports = ElvishLyrist;
