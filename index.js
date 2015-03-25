'use strict';

var Metalsmith  = require('metalsmith');
var serve       = require('metalsmith-serve');
var watch       = require('metalsmith-watch');
var markdown    = require('metalsmith-markdown');
var layouts     = require('metalsmith-layouts');
var assets      = require('metalsmith-assets');
var collections = require('metalsmith-collections');
var metallic    = require('metalsmith-metallic');

// todo: load environment specific config
var config = require('./config/dev.json');

Metalsmith(__dirname)
  .source(config.source)
  .destination(config.destination)
  .clean(config.clean)

  .use(metallic(config.metallic))
  .use(markdown(config.markdown))
  .use(collections(config.collections))
  .use(layouts(config.layouts))
  .use(assets(config.assets))

  .use(watch(config.watch))
  .use(serve(config.serve))

  .build(function(err) {
    if(err) {
      console.error(err);
    }
  });