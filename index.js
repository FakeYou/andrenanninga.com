'use strict';

var Metalsmith = require('metalsmith');
var serve      = require('metalsmith-serve');
var watch      = require('metalsmith-watch');
var markdown   = require('metalsmith-markdown');
var layouts    = require('metalsmith-layouts');

// todo: load environment specific config
var config = require('./config/dev.json');

Metalsmith(__dirname)
  .source(config.source)
  .destination(config.destination)
  .clean(config.clean)

  .use(markdown(config.markdown))
  .use(layouts(config.layouts))

  .use(watch(config.watch))
  .use(serve(config.serve))

  .build(function(err) {
    if(err) {
      console.error(err);
    }
  });