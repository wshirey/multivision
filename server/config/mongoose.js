var mongoose = require('mongoose');

module.exports = function(config) {
  mongoose.connect(config.db);

  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function callback() {
    console.log('multivision db opened');
  });
}

var userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String
});

var User = mongoose.model('User', userSchema);

User.find({}).remove(function() {
  User.create({
    firstName: 'Wally',
    lastName: 'Shirey',
    username: 'wshirey'
  });
  User.create({
    firstName: 'Joe',
    lastName: 'Namath',
    username: 'joe cool'
  });
  User.create({
    firstName: 'Pelé',
    lastName: 'Nascimiento',
    username: 'pelé'
  });
});