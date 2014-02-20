var passport = require('./server/config/passport');
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./server/config/config')[env];
var app = require('./server/config/express')(config);
require('./server/config/mongoose')(config);
var passport_config = passport();
require('./server/config/routes')(app, passport_config);

app.listen(config.port);
console.log('Listening on port ' + config.port);