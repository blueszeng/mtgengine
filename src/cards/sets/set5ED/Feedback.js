"use strict";
const Constants = require ("../../../Constants");
const FeedbackBase = require("../setCED/Feedback");

class Feedback extends FeedbackBase {
  constructor (game) {
    super(game, "Feedback", "Fifth Edition", "5ED");
  }
}

module.exports = Feedback;
