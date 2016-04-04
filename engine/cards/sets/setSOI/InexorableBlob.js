"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InexorableBlob extends Card {
  constructor(game) {
    super(game, "Inexorable Blob", "Shadows over Innistrad", "SOI");
  }
}

module.exports = InexorableBlob;
