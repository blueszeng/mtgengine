"use strict";
const Constants = require ("../../../Constants");
const GoblinBalloonBrigadeBase = require("../setATH/GoblinBalloonBrigade");

class GoblinBalloonBrigade extends GoblinBalloonBrigadeBase {
  constructor (game) {
    super(game, "Goblin Balloon Brigade", "Ninth Edition", "9ED");
  }
}

module.exports = GoblinBalloonBrigade;
