var passport = require('passport'),
    mongoose = require('mongoose'),
    LocalStrategy = require('passport-local').Strategy;

module.exports = function() {
  var User = mongoose.model('User');
  passport.use(new LocalStrategy(
    function(username, password, done) {
      console.log('passport.use');
      User.findOne({ username: username }, function(err, user) {
        if (user && user.authenticate(password))
          return done(null, user);
        else
          return done(null, false);
      });
    }
  ));

  passport.serializeUser(function(user, done) {
    console.log('serializeUser');
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    console.log('deserializeUser');
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  return {
    auth: function(req, res, next) {
      passport.authenticate('local', function(err, user, info) {
        if (err) { return next(err); }
        if (!user) { return res.send({success: false}); }
        req.logIn(user, function(err) {
          if (err) { return next(err); }
          return res.send({success: true, user: user});
        });
      })(req, res, next);
    }
  }
};
