var express        = require('express');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

var app = express();

// serves static content to the app from the public directory
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

var port = 3000;
app.listen(port, function() {
  console.log('listening on port ' + port);
});
