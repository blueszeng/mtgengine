"use strict";
const Constants = require ("../../../Constants");
const PhantasmalTerrainBase = require("../set6ED/PhantasmalTerrain");

class PhantasmalTerrain extends PhantasmalTerrainBase {
  constructor (game) {
    super(game, "Phantasmal Terrain", "Limited Edition Beta", "LEB");
  }
}

module.exports = PhantasmalTerrain;
