var express = require('express');
var router = express.Router();
var dbQuery = require('../queries/dbQuery')
var async = require('async')

module.exports = function (db) {

  router.get('/items', function (req, res) {
    dbQuery.getItems(db, function (err, rows) {
      if (err) console.log(err)
      res.send(rows)
    })
  })

  router.get('/user/:userId', function (req, res) {
    dbQuery.getUserById(db, req.params.userId, function (err, row) {
      if (err) console.log(err)
      res.send(row)
    })
  })

  router.post('/user/debt/:userId', (req, res) => {
    let debt = 0;
    let userId = req.params.userId;
    async.series([
      function (callback) {
        //get latest debt
        dbQuery.getUserById(db, userId, function (err, row) {
          if (err) callback(err)
          dbt = row.debt;
          callback();
        })
      },
      function (callback) {
        //update debt
        dbQuery.updateUserDebpt(db, usrId, debt + req.body.amount, function (err) {
          if (err) callback(err)
          else callback()
        })
      },
      function (callback) {
        //add transaction
        transaction = { userId: userId, itemId: null, price: debt, info: req.body.info }
        dbQuery.addTransaction(db, transaction, function (err) {
          (err) ? callback(err) : callback();
        })
      }
    ], function (err) {
      if (err) {
        console.log(err)
        res.sendStatus(400)
      }
      res.sendStatus(200)
    })
  })

  router.post('/user/debt/sub/:userId', function (req, res) {
    dbQuery.updateUserDebtById(db, { userId: req.params.userId, amount: req.body.amount }, function (err) {
      if (err) {
        console.log(err)
        res.sendStatus(400)
      }
      res.sendStatus(200)
    })
  })


  return router;

};