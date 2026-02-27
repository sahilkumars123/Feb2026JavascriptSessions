//true == 1
//false == 0


if (1) {
    console.log('pass');
}
else { //dead code or unreachable code
    console.log('fail');
}

console.log(1 + false); //1
console.log('1' + false); //1false
console.log(1 - false); //1

console.log("true" - true);//NaN[string - 0] = NaN