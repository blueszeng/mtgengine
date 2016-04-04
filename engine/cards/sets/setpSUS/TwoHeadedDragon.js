"use strict";
const Constants = require ("../../../Constants");
const TwoHeadedDragonBase = require("../setARC/TwoHeadedDragon");

class TwoHeadedDragon extends TwoHeadedDragonBase {
  constructor(game) {
    super(game, "Two-Headed Dragon", "Super Series", "pSUS");
  }
}

module.exports = TwoHeadedDragon;
