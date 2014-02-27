var Course = require('mongoose').model('Course');

exports.list = function(req, res) {
  Course.find(function (err, collection) {
    res.send(collection);
  });
};