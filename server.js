var express = require('express'),
    stylus = require('stylus');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express(),
    path = require('path');

app.configure(function() {
  app.set('views', __dirname + '/server/views');
  app.set('view engine', 'jade');
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(require('stylus').middleware(path.join(__dirname, '/public')));
  app.use(express.static(path.join(__dirname, '/public')));
});

app.get('/partials/:partialPath', function(req, res) {
  res.render('partials/' + req.params.partialPath);
});

app.get('*', function(req, res) {
  res.render('index');
});

var port = 3030;
app.listen(port);
console.log('Listening on port ' + port);
