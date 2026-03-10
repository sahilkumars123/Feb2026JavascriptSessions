let u1 = {
    name: 'sahil',
    age: 30,
    status: 'active'
}

let u2 = {
    name: 'anu',
    age: 40,
    status: 'inactive'
}

let u3 = {
    name: 'monika',
    age: 35,
    status: 'active'
}



// console.log(u3);

u1 = u2;
console.log(u1); //Anu
console.log(u2); //Anu

u2 = u3;
console.log(u2); //monika
console.log(u3); //monika

u1 = u2 = u3;
console.log(u1);
console.log(u2);
console.log(u3);
