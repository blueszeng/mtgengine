"use strict";
const Utils = require("./Utils");
const Constants = require("./Constants");
const assert = require("assert");

class Cost {
  constructor (costString) {
    this._costs = {};

    let start = 0;
    while (true) {
      start = costString.indexOf("{", start);

      if (start === -1) {
        break;
      }

      start = start + 1;

      let end = costString.indexOf("}", start);
      assert(end !== -1);

      let token = costString.substring(start, end).replace("/", "");

      let amount = 1;
      let type = Utils.getCostTypeFromToken(token);
      assert(type);
      if (type === Constants.costs.GENERIC) {
        amount = parseInt(token);
      }

      if (!this._costs[type]) {
        this._costs[type] = 0;
      }

      this._costs[type] += amount;
    }
  }

  get cmc () {
    var cmc = 0;
    for (let type in this._costs) {
      if ([
        Constants.costs.X,
        Constants.costs.Y,
        Constants.costs.Z,
        Constants.costs.TAP,
        Constants.costs.UNTAP
        ].indexOf(type) === -1) {

        let multiplier = 1;

        if ([
          Constants.costs.WHITE2,
          Constants.costs.BLUE2,
          Constants.costs.BLACK2,
          Constants.costs.RED2,
          Constants.costs.GREEN2
          ].indexOf(type) !== -1) {
          multiplier = 2;
        }

        cmc += this._costs[type] * multiplier;
      }
    }
    return cmc;
  }

  getCmcOnStack (x, y, z) {
    let cmc = this.cmc;
    for (let type in this._costs) {
      switch (type) {
        case Constants.costs.X:
          cmc += this._costs[type] * x;
          break;
        case Constants.costs.Y:
          cmc += this._costs[type] * y;
          break;
        case Constants.costs.Z:
          cmc += this._costs[type] * z;
          break;
      }
    }
    return cmc;
  }
}

module.exports = Cost;
