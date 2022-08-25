// in http method we will create http object snd then use function 
const http = require("http")
function reqListener(req, res) {
    console.log("Welome into the server")
}
const server = http.createServer(reqListener)
server.listen(2000)

//the output willl be on browser page
const https = require("http")
//serve use horaha hai as server object
const serve = https.createServer((req, res) => {
    res.end("request is bieng listened");
    console.log("working");
})
serve.listen(4000)


//the output willl be on browser page from html file
let httpp = require('http');
let f = require('fs');
let handleRequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    fs.readFile("E:\B.TECH\Semester 5th\advanced web development\moon\index.html", null, function (error, data) {
        if (error) {
            response.writeHead(404);
            respone.write('Whoops! File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
};

httpp.createServer(handleRequest).listen(8000);

