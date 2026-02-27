//best example of switch case --- cross browser logic

let browser = 'chrome =';

switch (browser.trim().toLowerCase()) {

    case 'chrome':
        console.log('chrome is launched');
        break;

    case 'firefox':
        console.log('firefox is launched');
        break;

    default:
        console.log('please pass the valid browser name::' + browser);
}


//use cases for switch case:
//1. cross browser logic
//2. cross os/platforms: win/linux/mac
//3. cross system: local, remote
//4. cross environment: dev/qa/stage/uat/prod
//5. RBAC: user permission: admin, customer, seller, partner, vendor, distributor, guest
//6. locator strategy: id, name, role, text, xpath, css
//7. testing type: sanity, smoke, regression, ui, api, mobile
//8. uber app: booking type: mini, sedan, suv, bike
//9. payment: upi, paypal, cc, debit, wire, stripe, cash
//10. loan type: home: 8%, car: 10%, edu: 6%


//if-else
//one condition to check
//if(user === 'admin'){

//}else{

//}

//voting logic is the perfect example for if-else statements
