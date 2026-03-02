//comparison
// == loose equality :: value
// === strict equality: value + type


let n1 = 10;
let n2 = "10";

console.log(n1 == n2); //true
console.log(n1 === n2); //true [number === string]

console.log(true == 1);
console.log(true === 1);


console.log(false == 0); //true
console.log(false === 0); //false

console.log([] == 0); //true
//console.log([] === 0); -- cannot compare a number to a non-pimitive datatype

//interview ques
console.log(null == undefined); //true

console.log(typeof (null));
console.log(typeof (undefined));

console.log(null === undefined); //false [object === undefined]

if (null === undefined) {
    console.log('click on the element');
} else {
    console.log('close the browser');
}



let isElementDisplayed = true;

if (isElementDisplayed) {
    console.log('pass');
}
else {
    console.log('fail');
}