var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Acess-Control-Allow-Headers', 'Content-Type');
	next();
});
app.use('/hello', function(req,res,next) {
	res.send('HelloWorld!');
	next();
});

mongoose.connect('mongodb://localhost/meanappproject1');
mongoose.connection.once('open', function() {

app.models = require('./models/index');

var routes = require('./controllers/routes');
_.each(routes, function(controller,route) {
	app.use(route, controller(app, route));
});

	console.log('Listening on port 8080...');
	app.listen(8080);
});

