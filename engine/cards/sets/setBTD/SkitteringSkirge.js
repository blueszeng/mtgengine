"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SkitteringSkirgeBase = require("../setpARL/SkitteringSkirge.js");

class SkitteringSkirge extends SkitteringSkirgeBase {
  constructor(game) {
    super(game, "Skittering Skirge", "Beatdown Box Set", "BTD");
  }
}

module.exports = SkitteringSkirge;
