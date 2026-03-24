function startMachine(callback) {
    console.log('string the machine');
    callback();
}


startMachine(() => {
    console.log('done');
})


startMachine(function () {
    console.log('start');
})

startMachine(function code() {
    console.log('coding');
})

console.log("=========================");

function getInfo(callback) {
    console.log('getting some info...');
    callback();
}

getInfo(() => { });


function getMyDetails(callback) {
    console.log('getting some details....');
    callback('selenium');
}

getMyDetails((x) => {
    console.log(x);
});


function getMarks(callback) {
    console.log('hi getting the marks.....');
    callback(200);
    return 500;
}


let p = getMarks((num) => {
    console.log('number is::' + num);
})

console.log('p val;ue is:: ' + p);


function openPage(url, callback) {
    console.log('app url:' + url);
    let browser = callback('Amazon Login Page');
    console.log(browser);
    return true;
}

let flag = openPage('https://www.amazon.com', (title) => {
    console.log('getting the page title.....' + title);
    return 'chrome';
});


setTimeout(() => {
    console.log('print this line')
}, 3000);