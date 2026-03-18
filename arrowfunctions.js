//arrow functions - It is a anonymous function -- no function name
//we can skip the function keyword as well


let s1 = () => {
    console.log('this is the arrow function');
}

s1();

console.log("================");

let print = () => console.log('this is js trainings');

print();

console.log("================");


// let s2 = (num) => num % 2 === 0;

// let result = s2(11);

// console.log(result);


// let s2 = num => num % 2 === 0;

// let result = s2(11);

// console.log(result);


// let s2 = (a, b) => a + b;

// let result = s2(1, 2);
// console.log(result);

console.log("=======================")

//Assignment :: cross browser testing --- chrome, firefox, edge


let s4 = browserName => {
    switch (browserName.trim().toLowerCase()) {
        case 'chrome':
            console.log('chrome is launched');
            break;

        default:
            break;
    }
}

s4('chrome');


console.log("=======================")


let checkVersion = (envName, browserVersion) => {
    console.log(envName);
    console.log(browserVersion);
    return 0;
}

let n = checkVersion('qa', 3456);
console.log("n is ::" + n);



