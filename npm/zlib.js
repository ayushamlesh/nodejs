/*The node:zlib module provides compression functionality implemented 
using Gzip, Deflate/Inflate, and Brotli.
To access it: const zlib = require('zlib');
The Zlib module provides a way of zip and unzip files.
In the example below, we use the fs module to create read and write streams.
The read stream is initialized with source, which reads a file called input.txt.
The write stream is initialized with destination.
Then, we create a Gzip object in line 11.
Finally, we use a pipeline to read from the source, compress using 
the gzip object,
 and write into destination.
If this process does not throw an error, it means that the object
 was created successfully
*/


// 1st it creates .gz file by the help of below code

const { createGzip } = require('zlib');
const { pipeline } = require('stream');
const {
    createReadStream,
    createWriteStream
} = require('fs');

const source = createReadStream('input.txt');
const destination = createWriteStream('input.txt.gz');
const gzip = createGzip();

pipeline(source, gzip, destination, (err) => {
    if (err) {
        console.error('An error occurred:', err);
        process.exitCode = 1;
    }
});

console.log("Gzip object created")