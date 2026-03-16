//WAF:
//name :: getEmpDevices(empName)
//empName:: string
//return: Array -> collection of all the devices in an array


/**
 * 
 * @param {string} empName 
 */
function getEmpDevices(empName) {

    let numberofDevices = [];

    switch (empName.trim().toLowerCase()) {
        case 'sahil':
            numberofDevices.push('macbook')
            numberofDevices.push('airtel')
            break;

        case 'rahul':
            numberofDevices.push('HP laptop')
            numberofDevices.push('jio')
            break;

        default:
            console.log('please pass the correct name:: ' + empName);
    }

    return numberofDevices;
}



let devicesVal = getEmpDevices('sahil');

console.log(devicesVal);
console.log(devicesVal.length);