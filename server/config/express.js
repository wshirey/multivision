var express = require('express'),
    stylus = require('stylus'),
    path = require('path');

module.exports = function (config) {
  var app = express();
  app.configure(function() {
    app.set('views', config.rootPath + '/server/views');
    app.set('view engine', 'jade');
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(stylus.middleware(path.join(config.rootPath, '/public')));
    app.use(express.static(path.join(config.rootPath, '/public')));
  });
  return app;
};