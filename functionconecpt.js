// named function :: resuable code/logic

//1. simple function :: has no input and no return

function test() {
    console.log('test function');
}
test();




//sum(); //hoisting
function sum() {
    let c = 10 + 20;
    console.log(`sum is :: ${c}`);
}
//sum();


//2. fucntion :: take some input and return nothing

// function add(a, b) { //parameters
//     let c = a + b;
// }

// add(10, 20); //values/arguments


//3. fucntion :: take some input and return nothing

function add(a, b) { //parameters
    let c = a + b;
    return c;
}

let sum1 = add(10, 20); //values/arguments
console.log('sum is:: ' + sum1);

/**
 * 
 * @param {string} trainerName 
 */
function getTrainerName(trainerName) {
    console.log('my trainer name is:: ' + trainerName);
    console.log(trainerName.toUpperCase());
}

getTrainerName('sahil');


//AC: create a function which will take a param
//param: browserName (string): chrome/firefox/edge/sfari
//return: true/false
//return true: if browser is available
//return false: if browser is not available, and print invalid browser