module.exports = function(app, passport) {
  app.get('/partials/*', function(req, res) {
    res.render('../../public/app/' + req.params);
  });

  app.post('/login', passport.auth);

  app.get('*', function(req, res) {
    res.render('index');
  });
}