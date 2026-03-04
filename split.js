//split :: Split a string into substrings using the specified separator and return them as an array.

let mesg = "java_javascript_ruby_pyhton";

let m = mesg.split('_');

console.log(m);
console.log(m.length)

//interview question

let test = 'aAseleniumAaAplaywrightAAaAtestingAA';
let t = test.split('aA');
console.log(t[0]);//empty string

let data = 'tom;30;12;true;LA';
let d = data.split(";");
console.log(d);


let dt = 'javascript is a funny lang';
console.log(dt.split('funny')[0]); //javascript is a 
console.log(dt.split('funny')[1]); // lang