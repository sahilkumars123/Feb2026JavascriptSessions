let person = {
    personName: 'Sahil',
    age: 30,
    address: 'Chandigarh'
}

console.log(person);
console.log(typeof person);

console.log("=====================")

//Conversion of JS Object to string -- we have a predefined method called as Stringfy method - Marshelling
let personString = JSON.stringify(person);
console.log(personString)
console.log(typeof personString)

console.log("=====================")

//Conversion of String into JS Object - UnMarshelling

//Converts a JavaScript Object Notation (JSON) string into an object.
let personObject = JSON.parse(personString);
console.log(personObject);
console.log(typeof personObject);

// Second Example
let booksJson = `{
    "name" : "The pragmatic Programmer",
    "author" : "Andrew Hunt"
    }`;

let booksObject = JSON.parse(booksJson);
console.log(booksObject);
console.log(typeof booksObject);
