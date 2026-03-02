//Array - it is a collection of mutiple elements in a single variable


//int[], float[], char[], Object[]


let num = ['sahil', 30, 'm'];
console.log(typeof num); //object


//int[] num = {1,2,3,4}
//the way of declaring the arrays

let n = [];

console.log(n)
console.log(n.length);

let arr = [10, 20, 30, 40];
console.log(arr.length); //4
//LI = 0
//HI = 3
//length = HI + 1;
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);  //AIOB - Java  ,.......//undefined - Javascript
console.log(arr[-1]); //undefined


//mixed datatypes
//let num = ['sahil', 30, 'm'];
//console.log(typeof num); //object

//3. Array constructor
let p = new Array(100, 200, 300, 400);
console.log(p);


//4. 
let test = Array.of(10, 20, 30, 40, 50);
console.log(test);


//dynamic nature : JS arrays are dynamic in nature

console.log("-------------");

let num1 = [1, 2, 3, 4];
console.log(num1.length);
num1.push(5); //at the end
console.log(num1.length);
console.log(num1);

//add in the beginning
num1.unshift(0); //add the number in the beginning
console.log(num1.length);
console.log(num1);

console.log("-----remove----------");

let browser1 = ['chrome', 'edge', 'firefox', 'opera', 'safari'];
console.log(browser1.length);
console.log(browser1);

browser1.pop(); //remove the element from the last

console.log("---After pop-----");
console.log(browser1.length);
console.log(browser1);

browser1.shift();
console.log("------------");
console.log(browser1.length);
console.log(browser1);

//print all the values of an array

//1. index based loop

let arr2 = [10, 20, 30, 40];
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}

//2. for... of loop : print the value

let browser2 = ['chrome', 'edge', 'firefox', 'opera', 'safari'];

for (let ele of browser2) {
    console.log(ele);
    if (ele === 'chrome') {
        console.log('Launch the browser');
        break;
    }
}
