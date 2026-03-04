//splice : add/remove elements at a specific location/index
//Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.


let cart = ['apples', 'banana', 'mango', 'grape', 'kiwi'];

//remove 1 element from index 2
let c = cart.splice(2, 1);
console.log(c); //returning the deleted elements.
console.log(cart); //left over array after deletion