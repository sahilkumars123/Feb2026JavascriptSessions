// let, var, const are indentifers...these are not datatypes. Datatypes are mostly which type of data you want to store in the memory.


//primitive datatypes in javascript
//--number, string , boolean, undefined, symbol, null, BigInt


// Non-Primitve Datatypes in javacscript
//- object, classes, array, functions, enum,  interface


//number
//size : 8 bytes = 64 bits = 
let a = 10;
let b = 20.45;
let c = 100;

console.log(typeof (a));
console.log(typeof (b));
console.log(typeof (c));


//BigInt


//string
//size of string is :: 2 bytes of each character
let empName = 'sahil';
let browser = 'chrome';
let lang = 'javascript'
let gender = 'm';

console.log(typeof (empName));
console.log(typeof (lang));
console.log(typeof (gender));

//boolean

let flag = true;
let isActive = false;

console.log(typeof (flag));
console.log(typeof (isActive));


//undefined
//not fixed

let block;
console.log(block); //undefined
console.log(typeof (block)); //undefined

//null
//size:: may vary from 0 to 4 bytes
let driver = null;
console.log(driver); //null
console.log(typeof (null)); //object


// let username = '';
// console.log(typeof (username));


// console.log(dp);
// var dp = 10;


//for comparison, they use ===, ==


// ==, .equals()


let studentName = 'sahil';

//console.log('here is '"++"'the name');

console.log(`here is ${studentName} the name `);






