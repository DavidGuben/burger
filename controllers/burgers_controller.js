// dependencies
var express = require('express');
var router = express.Router();
var cat = require('../models/burger.js');

// main route
router.get('/', function(req, res) {
  res.redirect('/burgers');
});

// route to get all burgers
router.get('/burgers', function(req, res) {
  burger.all(function (data) {
    var hbsObect = { burgers:data };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

// route to create a burger
router.post('/burgers/create', function(req, res) {
  burger.create(['name', 'devoured'], [req.body.name, req.body.devoured], function() {
    res.redirect('/burgers');
  });
});

// route to update a burger
router.put('/burgers/update/:id', function(req, res){
  var condition = 'id = ' + req.params.id;

  console.log('condition ', condition);

  burger.update({devoured: req.body.devoured}, condition, function() {
    res.redirect('/burgers');
  });
});

// route to delete a burger
router.delete('/burgers/delete/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  burger.delete(condition, function() {
    res.redirect('/burgers');
  });
});
