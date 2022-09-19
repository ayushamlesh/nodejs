// provides a robust set of features to develop web and mobile applications.
// Following are some of the core features of Express framework −
// Allows to set up middlewares to respond to HTTP Requests.
// Defines a routing table which is used to perform different actions based on HTTP Method and URL.
// Allows to dynamically render HTML Pages based on passing arguments to templates.

//npm install express --save

/*
extra gyaan
The above command saves the installation locally in the node_modules directory and creates a directory express inside node_modules. You should install the following important modules along with express −

    body-parser − This is a node.js middleware for handling JSON, Raw, Text and URL encoded form data.

    cookie-parser − Parse Cookie header and populate req.cookies with an object keyed by the cookie names.

    multer − This is a node.js middleware for handling multipart/form-data.
$ npm install body-parser --save
$ npm install cookie-parser --save
$ npm install multer --save
*/

// ___________________`_______________________
//simple basic Express app which starts a server and listens on port 8081 for connection


var express = require('express');
var app = express();

//Express application uses a callback function whose parameters are request and response objects.
//The request object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on.
//The response object represents the HTTP response that an Express app sends when it gets an HTTP request.
//You can print req and res objects which provide a lot of information related to HTTP request and response including cookies, sessions, URL, etc.

app.get('/', function (req, res) {
    res.send('Hello World');
})

var server = app.listen(7010, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})


// ___________________`_______________________

//single port multiple apps

/*
var express = require('express');
var app = express();

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
    console.log("Got a GET request for the homepage");
    res.send('Hello GET');
})

// This responds a POST request for the homepage
app.post('/', function (req, res) {
    console.log("Got a POST request for the homepage");
    res.send('Hello POST');
})

// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
    console.log("Got a DELETE request for /del_user");
    res.send('Hello DELETE');
})

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
    console.log("Got a GET request for /list_user");
    res.send('Page Listing');
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function (req, res) {
    console.log("Got a GET request for /ab*cd");
    res.send('Page Pattern Match');
})

var server = app.listen(8000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})
*/
//_____________________________________________________
