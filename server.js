var express = require('express'),
    stylus = require('stylus'),
    path = require('path'),
    mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

mongoose.connect('mongodb://localhost/multivision');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback() {
  console.log('multivision db opened');
});

app.configure(function() {
  app.set('views', __dirname + '/server/views');
  app.set('view engine', 'jade');
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(require('stylus').middleware(path.join(__dirname, '/public')));
  app.use(express.static(path.join(__dirname, '/public')));
});

app.get('/partials/*', function(req, res) {
  res.render('../../public/app/' + req.params);
});

app.get('*', function(req, res) {
  res.render('index');
});

var port = 3030;
app.listen(port);
console.log('Listening on port ' + port);
