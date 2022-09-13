/*
it will read data word by word and at the same time it will
send data to the server.
eaxh type of stream is an EventEmitter.
data->
end->
error->

writable stream ->fs.createWriterStream()
Redable Stream->fs.createReadableStream()
Duplex->stram both redable and writable
Transfrom->Duplex Stream that can mpdiefy or transform 
the data as it is written and read
*/

//normal way 1st way
/*
const fs = require("fs");
const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
    //var fs = require("fs");
    fs.readFile("input.txt", (err, data) => {
        if (err) return console.error(err);
        res.end(data.toString());
    });
})
server.listen(5000);
*/

//2nd way using stream

const { resolveAny } = require("dns/promises");
const fs = require("fs");
const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
    console.log("server is running")
    const rstream = fs.createReadStream("input.txt");
    rstream.on('data', (chunkdata) => {
        res.write(chunkdata);
    });
    rstream.on("end", () => {
        res.end("end");
    });
});
server.listen(4000);

