/**
 * Gray Matter
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors.
 * Licensed under the MIT license.
 */

'use strict';

// node_modules
var YAML = require('js-yaml');
var coffee = require('coffee-script');
var toml = require('toml');


// The module to export
var parse = module.exports = {};


parse.yaml = function(src) {
  return YAML.load(src);
};

parse.json = function(src) {
  return JSON.parse(src);
};

parse.coffee = function(src, options) {
  options = options || {};
  try {
    return coffee['eval'](src, options);
  } catch (e) {
    console.warn('Could not parse coffee-script:', e);
  }
};

parse.toml = function(src) {
  try {
    return toml.parse(src.trim());
  } catch (e) {
    console.warn('Count not parse toml:' + src, e);
  }
};
