//function login()
//function login(a)

//In JS - function overloading is not possible because that is a complite time concept and JS is a runtime langhuage



// function login(a) {
//     console.log('login to app1');
// }

// function login() {
//     console.log('login to app2');
// }


// login(12); // Identifier 'login' has already been declared.....ES6 2015




//login
//login - username,pwd
//login - username,pwd, otp



// function login() {

// }

// let loginUaerPassword = function loginwithUserNameandPwd() {

// }

// let func = function loginwithUserNameandPwdOtp() {

// }

//hack

function login() {

    if (arguments.length === 0) {
        console.log('login with 0 args');
    }
    else if (arguments.length === 2) {
        console.log(`login with username:: ${arguments[0]} and password:: ${arguments[1]}`);
    } else {
        console.log('please pass with correct number of values');
    }
}

login();
login('sahil', 'admin123');
login('sahil');