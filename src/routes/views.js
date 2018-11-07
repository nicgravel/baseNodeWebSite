var router = require('express').Router();
var _ = require('lodash');

module.exports = function (db) {

  var defaultData = function (req) { return { message: req.flash() } };

  /* GET home page. */
  router.get('/', function (req, res) {
    res.render('index', _.assign(defaultData(req)));
  });

  router.get('/items', function (req, res) {
    res.render('items', _.assign(defaultData(req)));
  })

  router.get('/users', function (req, res) {
    res.render('users', defaultData(req));
  })

  router.get('/transactions', function (req, res) {
    res.render('transactions', defaultData(req));
  })

  return router;
}




