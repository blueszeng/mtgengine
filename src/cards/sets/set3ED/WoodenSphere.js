"use strict";
const Constants = require ("../../../Constants");
const WoodenSphereBase = require("../set6ED/WoodenSphere");

class WoodenSphere extends WoodenSphereBase {
  constructor (game) {
    super(game, "Wooden Sphere", "Revised Edition", "3ED");
  }
}

module.exports = WoodenSphere;
