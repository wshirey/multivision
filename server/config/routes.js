module.exports = function(app, passport) {
  app.get('/partials/*', function(req, res) {
    res.render('../../public/app/' + req.params);
  });

  app.post('/login', function(req, res, next) {
    passport.auth(req, res, next);
  });

  app.get('*', function(req, res) {
    res.render('index');
  });
}