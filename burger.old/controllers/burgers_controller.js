/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express    = require('express');
var router     = express.Router();  // Router() is used to address a route
var burger     = require('../models/burger.js');

// index route
router.get('/', function (req, res) {
	res.redirect('/burgers');
});

// render a list of burgers
router.get('/burgers', function (req, res) {
	console.log("route hit");
	burger.all(function (data) {
		console.log("route hit 2");
		var hbsObject = { burgers: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

// router for creating a burger
router.post('/burgers/create', function (req, res) {
	burger.create(['name', 'devoured'], [req.body.name, req.body.devoured], function () {
		res.redirect('/burgers');
	});
});

router.put('/burgers/update/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	burger.update({ devoured: req.body.devoured }, condition, function () {
		res.redirect('/burgers');
	});
});

router.delete('/burgers/delete/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	cat.delete(condition, function () {
		res.redirect('/burgers');
	});
});

module.exports = router;
