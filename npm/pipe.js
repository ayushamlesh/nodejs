/*
pipe is mechanism where output is the input for other

unpipe()
flush()
*/


//pipe method done//
const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    // generete readable stream to read content of data.txt
    const readStream = fs.createReadStream('input.txt');

    // pass readable stream data, which are the content of data.txt, to the
    // response object, which is a writeable stream
    readStream.pipe(res);
    console.log("server is running and printed data using pipe method")
}).listen(8000);





//normal create a new file from old one
// Node.js program to demonstrate the
// readable.pipe() method

// Accessing fs module
/*
var fs = require("fs");

// Create a readable stream
var readable = fs.createReadStream('input.txt');

// Create a writable stream
var writable = fs.createWriteStream('output.txt');

// Calling pipe method
readable.pipe(readable);

console.log("Program Ended");

*/