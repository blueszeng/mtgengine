"use strict";
const Constants = require ("../../../Constants");
const PowerSinkBase = require("../setBTD/PowerSink");

class PowerSink extends PowerSinkBase {
  constructor (game) {
    super(game, "Power Sink", "Vintage Masters", "VMA");
  }
}

module.exports = PowerSink;
