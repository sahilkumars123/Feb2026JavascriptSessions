let person = {
    personName: 'Sahil',
    age: 30,
    address: 'Chandigarh'
}

let p = { ...person }; //it will create a new object
console.log(p);
console.log(typeof p);

p.address = 'Chennai';
console.log(p);
console.log("======");
console.log(person);


console.log("======");


let u1 = {
    name: 'sahil',
    age: 30
}

let u2 = u1;

u2.age = 32;
console.log(u2);
console.log(u1);

//is there any limit to create the number of references in the stack memory - we can have 'n' number of references.