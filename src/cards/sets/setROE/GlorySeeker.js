"use strict";
const Constants = require ("../../../Constants");
const GlorySeekerBase = require("../setDDF/GlorySeeker");

class GlorySeeker extends GlorySeekerBase {
  constructor (game) {
    super(game, "Glory Seeker", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = GlorySeeker;
