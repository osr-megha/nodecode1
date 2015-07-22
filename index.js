var express = require('express');// get express module
var app = express();// start express and get it in app variable

// add routing for GET on '/'
app.get('/', function (req, res) {
	console.log(req.headers);// logging all request headers
	res.header("x-today",new Date());// adding a header
  	res.send('Hello World!');// sending data back to client
});


// add routing for GET on '/json'
app.get('/json', function (req, res) {
	
	res.json({"a":{"c":{"d":"d1"}}});
});


// starting server on localhost : 3000
var server = app.listen(3000, function () {
  console.log('Example app listening at http://%s:%s', server.address().address,server.address().port );


// 1) send json of username and password from client to server at /auth POST
// 2) console.log username and password at server side
// 3) if username is 'admin' and password is 'Password%1', 
// return {success : true} else return {success:false}
// hint :: http://expressjs.com/guide/routing.html