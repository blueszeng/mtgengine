"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FalseOrdersBase = require("../setCED/FalseOrders.js");

class FalseOrders extends FalseOrdersBase {
  constructor(game) {
    super(game, "False Orders", "Unlimited Edition", "2ED");
  }
}

module.exports = FalseOrders;
