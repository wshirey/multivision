var mongoose = require('mongoose'),
    encrypt = require('../utilities/encryption');

var userSchema = mongoose.Schema({
  firstName: {type: String, required:'{PATH} is required!'},
  lastName: {type: String, required:'{PATH} is'},
  username: {type: String, required:'{PATH} is', unique: true},
  salt: {type: String, required:'{PATH} is'},
  hashed_pwd: {type: String, required:'{PATH} is'},
  roles: [{type: String, required:'{PATH} is'}]
});

userSchema.methods = {
  authenticate: function(passwordToMatch) {
    return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
  }
};

var User = mongoose.model('User', userSchema);

function createDefaultUsers () {
  User.find({}).remove(function() {
    var salt, hash;
    salt = encrypt.createSalt();
    hash = encrypt.hashPwd(salt, 'wshirey');
    User.create({
      firstName: 'Wally',
      lastName: 'Shirey',
      username: 'wshirey',
      salt: salt,
      hashed_pwd: hash,
      roles: ['admin']
    });

    salt = encrypt.createSalt();
    hash = encrypt.hashPwd(salt, 'joe');
    User.create({
      firstName: 'Joe',
      lastName: 'Namath',
      username: 'joe',
      salt: salt,
      hashed_pwd: hash,
      roles: []
    });


    salt = encrypt.createSalt();
    hash = encrypt.hashPwd(salt, 'pele');
    User.create({
      firstName: 'Pelé',
      lastName: 'Nascimiento',
      username: 'pele',
      salt: salt,
      hashed_pwd: hash
    });
  });
}

exports.createDefaultUsers = createDefaultUsers;