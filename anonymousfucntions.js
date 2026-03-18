//anonymous functions - functions without any name are called as anonymous functions.
//we cannot hoist the anonymous function


//say();
let say = function () {
    console.log('this is the anonymous function');
}

say();



console.log(say.name); //say - it will the external variable name only

let s1 = function (a, b) {
    let sum = a + b;
    return sum;
}


let s = s1(10, 20);
console.log(s);

//Assignment :: cross browser testing --- chrome, firefox, edge