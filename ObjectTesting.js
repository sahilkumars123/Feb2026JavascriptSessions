//creating the object using classes in latest JS : ES6

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

let p1 = new Product('macbook', 1000);

console.log(p1);
console.log(typeof p1);
console.log(p1.name); //macbook
console.log(p1.price); //1000

//create a object without a reference name
new Product('iphone', 500);
new Product('samsung', 200);

//there is no predeinfed method to call gc.

let p2 = new Product('iphone', 500).name;
console.log(p2);
console.log(typeof p2);