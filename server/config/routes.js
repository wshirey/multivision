module.exports = function(app, passport) {
  app.get('/partials/*', function(req, res) {
    res.render('../../public/app/' + req.params);
  });

  app.post('/login', passport.auth);

  app.post('/logout', function (req, res) {
    req.logout();
    res.end();
  });

  app.get('*', function(req, res) {
    res.render('index',
      {
        bootstrappedUser: req.user
      });
  });
}