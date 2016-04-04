"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CommandTowerBase = require("../setC13/CommandTower.js");

class CommandTower extends CommandTowerBase {
  constructor(game) {
    super(game, "Command Tower", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = CommandTower;
