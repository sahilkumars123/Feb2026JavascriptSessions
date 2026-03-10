//An Object is collection of properties: key-value pair format

//key - string
//value - anything

let user = {
    name: 'sahil',
    age: 30,
    status: 'active',
    isEmployed: true
}

console.log(user);
console.log(user.name);
console.log(user.salary); //undefined

//second way
console.log(user['age']);

console.log("------------------")
console.log(typeof user); //object


//we can add the property on run time as well
user.city = 'LA';
console.log(user);

//update the property
user.age = 31;
console.log(user);

//delete the property as well
delete user.isEmployed;
console.log(user);

//for-in loop

//how to iterate the properties of object in for-in loop
let car = {
    name: 'bmw',
    price: 40,
    color: 'red'
}

for (let key in car) {
    console.log(`${key} : ${car[key]}`);
}

let person = {
    name: 'tram',
    age: 30
}

person = null;
console.log(person.age); //in Java NPE -- //In Javascript -- Cannot read properties of null (reading 'age')