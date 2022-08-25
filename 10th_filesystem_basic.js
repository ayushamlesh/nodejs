// how to create file.
const fs = require("fs")
{/* module is created or we can say object */ }

fs.writeFileSync('read.txt', "Hello, you are welcome ");
{/* a new file will be created with name read.txt */ }

// fs.writeFileSync('read.txt', "welcome, Ayush");
// it will overwrite perivious data.

fs.appendFileSync('read.txt', "I am in the new line")
/* this line will append the data into the file without
 overwriting just after the previous cursour position*/

const buf_data = fs.readFileSync("read.txt")
//buffer is used to store binary data,while reading from a file

org_data = buf_data.toString()
//change data to string

console.log(buf_data)
//print data on console
/*output is like <Buffer 48 65 6c 6c 6f 2c 20 79 6f 75 20 61 
72 65 20 77 65 6c 63 6f 6d 65 20 49 20 61 6d 20 69 6e 20 74 
68 65 20 6e 65 77 20 6c 69 6e 65>*/

console.log(org_data)
//OUTPUT-Hello, you are welcome I am in the new line

fs.renameSync("read.txt", "fileBasic.txt")
//renameFile

