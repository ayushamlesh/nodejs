//call back function. Asynchoronous
//fs is file system
//read file sñnchronous.
const fs = require("fs");
const data = fs.readFileSync("./ayush/lpu.txt", "utf-8");
console.log(data);
console.log("after the data");
console.log("__________");

/* asynchoronous in it it will print the line number
 15,16 first then it will print the data from file*/
const data2 = fs.readFile("./ayush/lpu.txt", "utf-8", (err, data2) => {
    console.log(data2);
});
console.log("after data")
console.log("'''''''''");


/*it will first print the "err" then the data and then after line number 24 gets printed*/
const data3 = fs.readFile("./ayush/lpu.txt", "utf-8", (err, data3) => {
    console.log(err);
    console.log(data3);
    console.log("after the data")
});
