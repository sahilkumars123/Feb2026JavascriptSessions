let user = {

    name: 'sahil',
    age: 30
}


console.log(user);
//1. freeze();

//Object.freeze(user);
//makes object immutable: can not add/update/delete anything

//cannot add it
//user.city = 'LA';
//console.log(user); //Cannot add property city, object is not extensible

//cannot delete it
//delete user.name;
//console.log(user); //  Cannot delete property 'name' of #<Object>

//cannot modify
//user.name = 'Rohan'
//console.log(user); // Cannot assign to read only property 'name' of object '#<Object>'


//2. Seal() - it will allow modifications, but wont allow adding/removing
Object.seal(user);
user.name = 'rohan';
console.log(user);

user.salary = 30000;
console.log(user); //Cannot add property salary, object is not extensible
