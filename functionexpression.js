let login = function logintithuserandpassword() {
    console.log('you are my trainer');
}

login(); //external name

//logintithuserandpassword(); -- ReferenceError: logintithuserandpassword is not defined

console.log(login.name); //it will print the internal name of the function


let add = function addTwoNumber(a, b) {
    let sum = a + b;
    return sum;
}

let s = add(10, 20);
console.log('sum is ::' + s);

//HW ::


//WAF ::

//launch browser 
//switch case -- chrome, firefox, safari
//return true/false


//assert - browser is launched, please enter the url
//fail -- no url is launched since the browser is invalid, broswerName
