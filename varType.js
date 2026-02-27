// var, let and const


//var : old way of declaring the variable
//scope : function scope

//1. 
var a = 10; //global scope
function test() {
    var a = 20;
    console.log(a); //20
    if (true) {
        var a = 30;
        console.log(a); //30
    }
    console.log(a); //30
}


test();
console.log(a);//10


//2. Redeclaration of the var variable is ALLOWED

var a = "sahil";

var a = "rohit";

console.log(a);


//3. Hoisting is also allowed in var
//Hoisting :: before declaration of variable, we are using the variable[It is against the rules of declaration]

console.log(b); //undefined
var b = 10;




//let : 
//scope : block scope








//const : //similar to final keyword in java 
//scope : block scope