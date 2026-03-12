let person = {
    personName: 'Sahil',
    age: 30,
    address: 'Chandigarh'
}

for (let e in person) {
    console.log(e); //keys
}

for (let e in person) {
    console.log(person[e]); //values
}


console.log("==================");

let keys = Object.keys(person);
console.log(keys);
console.log(keys.length);


//Returns an array of values of the enumerable own properties of an object
let values = Object.values(person);
console.log(values);
console.log(values.length);

//Returns an array of key/values of the enumerable own properties of an object
let pair = Object.entries(person);
console.log(pair);