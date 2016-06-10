"use strict";
const Constants = require ("../../../Constants");
const VisaratheDreadfulBase = require("../setV11/VisaratheDreadful");

class VisaratheDreadful extends VisaratheDreadfulBase {
  constructor (game) {
    super(game, "Visara the Dreadful", "Onslaught", "ONS");
  }
}

module.exports = VisaratheDreadful;
