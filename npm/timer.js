// time interval= delay in loop
// set time out = delay the output
//setTimeout(fun,time in milisecond)

//actual code below

// setTimeout(() => {
//     console.log("time delay was of 4 milliseconds")
// }, 4000
// );

// _____________________________________________________________________

//myfunction(arg1,arg2,.....)

//actual code below

//it will print Ayush first then ti wil go to the function
/* const myFunc = (param1) => {
     console.log(param1 + " its nodejs");
 };
 setTimeout(myFunc, 2000, 'Ayush');
*/
// _____________________________________________________________________

//function with multiple parameters

//actual code below
/* const myFunc1 = (param1, param2, param3, param4) => {
     console.log(param1 + " its nodejs. " + param2 + " is in LPU."
         + " His reg no. is " + param3 + " ,roll no. is " + param4);
 };

//yaha par multiple argument pass kr rahe hai according to the function

 setTimeout(myFunc1, 2000, 'Ayush', 'Amlesh', 12000788, 78);
*/
// _____________________________________________________________________

// task
/* print "hello after five seconds,
 then another "hello after 10 seconds
using "one parameter in function*/

/*const myFunc2 = (param1) => {
    console.log(param1);
};
setTimeout(myFunc2, 5000, 'Hello after five second');
setTimeout(myFunc2, 10000, 'Hello after ten second');
*/

//____________________________________________________________________

//a = setInterval(myFunc2, 5000, 'Hello');
//using setinterval whne we want to print in loop after some delay
/*function printstuff() {
    console.log("hello i am from the function")
}
setInterval(printstuff, 2000);*/
//____________________________________________________________________


// to stop the loop we use cleartimeout and clearinterval

/*
function printstuff() {
    console.log("hello i am from the function")
}
const id = setTimeout(printstuff, 0);
clearTimeout(id);
*/

//____________________________________________________________________

/*
function printstuff() {
    console.log("hello i am from the function")
}
const id2 = setInterval(printstuff, 1000);
clearInterval(id2);*/

//____________________________________________________________________
/*
function printstuff() {
    console.log("hello i am from the function")
}
setImmediate(printstuff);
const id = setImmediate(printstuff);
clearImmediate(id);*/
//the setImmediate function is used to execute a function
// right after the current event loop finishes.


//____________________________________________________________________
//____________________________________________________________________
//task print "name" every second and stop after 5 times
//after 5 time print "Done" and exit

function printstuff() {
    console.log("Ayush")
}
function clear() {
    clearInterval(id2);
    console.log("Done");
}
const id2 = setInterval(printstuff, 1000);
setTimeout(clear, 6000);
//task done

