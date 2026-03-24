//callback :: passing the function name to another function as a parameter
//call a function by passing the function name


let sum = (a, b) => a + b;
let diff = (a, b) => a - b;
let mul = (a, b) => a * b;
let div = (a, b) => a / b;

function calculator(funcName, a, b) {
    console.log('using two numbers');
    return funcName(a, b);
}

let result = calculator(sum, 10, 20);
console.log('result is:: ' + result);

result = calculator(diff, 10, 20);
console.log('result is:: ' + result);


console.log("=================================")

let addition = function (a, b) {
    return a + b;
}

console.log("=================================")


function doSomething(funcName, url) {
    console.log('entering the url:: ' + url);
    funcName();
}

doSomething(() => {
    console.log('launch url')
}, 'https://www.google.com');


