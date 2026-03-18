// function print(name = 'rohan') {
//     console.log('Hi this is:: ' + name);
// }

// //print('sahil');
// print();
// print('Rajat');


// console.log("=============")


//2. cross browser testing --- chrome, firefox, edge
/**
 * 
 * @param {string} browsername 
 */
function launchBrowser(browsername = 'chrome') {

    switch (browsername.trim().toLowerCase()) {
        case 'chrome':
            console.log('chrome is launched');
            return true;

        case 'firefox':
            console.log('firefox is launched');
            return true;

        default:
            console.log('please pass the valid browser name' + browsername);
    }
}


launchBrowser();


//env- QA, Stage, Dev, UAT, prod


//Usecase - pageload timeout --- by defualt we can keep it as 10 sec.......


