"use strict";
const Constants = require ("../../../Constants");
const ChannelBase = require("../setCED/Channel");

class Channel extends ChannelBase {
  constructor (game) {
    super(game, "Channel", "Vintage Masters", "VMA");
  }
}

module.exports = Channel;
