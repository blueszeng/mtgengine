"use strict";
const Constants = require ("../../../Constants");
const OgreBattledriverBase = require("../setDDN/OgreBattledriver");

class OgreBattledriver extends OgreBattledriverBase {
  constructor (game) {
    super(game, "Ogre Battledriver", "Magic 2014 Core Set", "M14");
  }
}

module.exports = OgreBattledriver;
