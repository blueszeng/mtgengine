"use strict";
const Constants = require ("../../../Constants");
const GargoyleSentinelBase = require("../setM11/GargoyleSentinel");

class GargoyleSentinel extends GargoyleSentinelBase {
  constructor (game) {
    super(game, "Gargoyle Sentinel", "Magic 2015 Core Set", "M15");
  }
}

module.exports = GargoyleSentinel;
