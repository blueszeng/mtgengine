"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WordofCommandBase = require("../setCED/WordofCommand.js");

class WordofCommand extends WordofCommandBase {
  constructor(game) {
    super(game, "Word of Command", "Unlimited Edition", "2ED");
  }
}

module.exports = WordofCommand;
