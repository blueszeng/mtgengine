"use strict";
const Constants = require ("../../../Constants");
const BattleofWitsBase = require("../setM13/BattleofWits");

class BattleofWits extends BattleofWitsBase {
  constructor (game) {
    super(game, "Battle of Wits", "Odyssey", "ODY");
  }
}

module.exports = BattleofWits;
