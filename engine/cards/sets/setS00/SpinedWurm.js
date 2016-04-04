"use strict";
const Constants = require ("../../../Constants");
const SpinedWurmBase = require("../setDPA/SpinedWurm");

class SpinedWurm extends SpinedWurmBase {
  constructor(game) {
    super(game, "Spined Wurm", "Starter 2000", "S00");
  }
}

module.exports = SpinedWurm;
