//Require config.json
var config = require('./config.json')
//Require the express module with `require()`
var express = require('express')
//We call express as a function and call it app
var app = express()

//Enable session storage
var session = require('express-session')
var RedisStore = require('connect-redis')(session)

app.use(session({
  store: new RedisStore(),
  secret: 'Teamfinder.com',
  resave: false,
  saveUninitialized: true,
}))

//Enable credentials
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Credentials', 'true')
	next()
})

//Enable JSON and Form submissions
app.use(require('body-parser').json())
app.use(require('body-parser').urlencoded({ extended: true }))

//Initialize Mongoose
var db = require('mongoose')
//Connect to Mongoose
db.connect(config.mongoose_url)
//Initialize Models
db.User = require('./models/User')(db)
db.Team = require('./models/Team')(db)
//Create REST endpoints
app.use(require('./api/User')(db, express.Router()))
app.use(require('./api/Team')(db, express.Router()))

//Serve all public content 
app.use(express.static('public'))

//Serve index.html on all routes
app.get('*', function(req, res) {
	return res.sendFile(__dirname + '/index.html')
})

//Listen to the server on the desired port
var PORT = 3000
app.listen(3000)
console.log("Teamfinder.com is listening on PORT", PORT)