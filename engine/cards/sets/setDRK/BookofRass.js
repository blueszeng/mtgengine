"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BookofRassBase = require("../setCHR/BookofRass.js");

class BookofRass extends BookofRassBase {
  constructor(game) {
    super(game, "Book of Rass", "The Dark", "DRK");
  }
}

module.exports = BookofRass;
