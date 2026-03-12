let user = {
    name: 'tom',
    age: 30,
    address: {
        city: 'bangalore',
        pincode: '160055',
        area: {
            areaname: 'new area'
        }
    }
}

console.log(user.age);
console.log(user.address.pincode);
console.log(user.address.area.areaname);



//Assignment
//how to access the nested object using for in loop