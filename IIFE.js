//IIFE - Immediately invoked function expression : no name - anonymous function


// (function () {
//     console.log('this is the IIFE function');
// })();


//this doesnot support a function expression
// let s1 = (function () {
//     console.log('this is the IIFE function');
// })();
//s1(); // SyntaxError: Unexpected end of input


//Example3
(function (name) {
    console.log('Hi this is:: ' + name);
})('sahil');

//Example4
let s1 = (function (a, b) {   //s1 is not fucntion expression, it is just a veriable to hold the value what we are returning.
    let sum = a + b;
    return sum;

})(10, 20);

console.log(s1);