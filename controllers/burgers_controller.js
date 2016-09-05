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
  burger.create(['name', 'devoured'], [req.body.name, req.body.devoured], function() {
    res.redirect('/burgers');
  });
});

router.put('/cats/update/:id', function(req, res){
  var condition = 'id = ' + req.params.id;

  console.log('condition ', condition);

  burger.update({devoured: req.body.devoured}, condition, function() {
    res.redirect('/burgers');
  });
});

router.delete('/cats/delete/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  burger.delete(condition, function() {
    res.redirect('/burgers');
  });
});
