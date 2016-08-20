//Require the express module with `require()`
var express = require('express')
//We call express as a function and call it app
var app = express()

//Serve all public content 
app.use(express.static('public'))

//Serve index.html on all routes
app.get('*', function(req, res) {
	return res.sendFile(__dirname + '/index.html')
})

//Listen to the server on the desired
var PORT = 3000
app.listen(3000)
console.log("Teamfinder.com is listening on PORT", PORT)