'use strict';

var Metalsmith  = require('metalsmith');
var serve       = require('metalsmith-serve');
var watch       = require('metalsmith-watch');
var markdown    = require('metalsmith-markdown');
var layouts     = require('metalsmith-layouts');
var assets      = require('metalsmith-assets');
var ignore      = require('metalsmith-ignore');
var collections = require('metalsmith-collections');
var metallic    = require('metalsmith-metallic');
var moveup      = require('metalsmith-move-up');
var define      = require('metalsmith-define');

// todo: load environment specific config
var config = require('./config/dev.json');

Metalsmith(__dirname)
  .source(config.source)
  .destination(config.destination)
  .clean(config.clean)

  .use(define(config.define))

  .use(metallic(config.metallic))
  .use(markdown(config.markdown))
  .use(collections(config.collections))
  .use(layouts(config.layouts))
  .use(ignore(config.ignore))
  // .use(assets(config.assets))
  .use(moveup(config.moveup))

  .use(watch(config.watch))
  .use(serve(config.serve))

  .build(function(err) {
    if(err) {
      console.error(err);
    }
  });