"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IcatianJavelineersBase = require("../setATH/IcatianJavelineers.js");

class IcatianJavelineers extends IcatianJavelineersBase {
  constructor(game) {
    super(game, "Icatian Javelineers", "Gateway", "pGTW");
  }
}

module.exports = IcatianJavelineers;
