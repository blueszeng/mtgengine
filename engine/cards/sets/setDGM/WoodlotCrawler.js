"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WoodlotCrawler extends Card {
  constructor(game) {
    super(game, "Woodlot Crawler", "Dragon's Maze", "DGM");
  }
}

module.exports = WoodlotCrawler;
