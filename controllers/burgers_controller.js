var express = require('express');
var router = express.Router();
var cat = require('../models/burger.js');

router.get('/', function(req, res) {
  res.redirect('/burgers');
});

router.get('/burgers', function(req, res) {
  burger.all(function (data) {
    var hbsObect = { cats:data };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/burgers/create', function(req, res) {
  cat.create(['name', 'devoured'], [req.body.name, req.body.devoured], function() {
    res.redirect('/burgers');
  });
});
