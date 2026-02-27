//let 
//scope :: block scope
let b = 20;
let pop = 60;
function rest() {
    console.log(pop); //60
    console.log(b); //Cannot access 'b' before initialization [Hoisting issue]
    let b = 30;
    console.log(b); //30
    if (true) {
        let b = 20;
        console.log(b); //20
    }
    console.log(b);//30
}

rest();
console.log(pop);

//2. RE-DECLARATION IS NOT ALLOWED IN LET

//let a = 20;


// 3. Hosting is NOT ALLOWED IN LET

//console.log(c); //ReferenceError: Cannot access 'c' before initialization
//let c = 60;


// let rithica;
// console.log(rithica);//undefined