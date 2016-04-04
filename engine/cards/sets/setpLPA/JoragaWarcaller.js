"use strict";
const Constants = require ("../../../Constants");
const JoragaWarcallerBase = require("../setC14/JoragaWarcaller");

class JoragaWarcaller extends JoragaWarcallerBase {
  constructor(game) {
    super(game, "Joraga Warcaller", "Launch Parties", "pLPA");
  }
}

module.exports = JoragaWarcaller;
