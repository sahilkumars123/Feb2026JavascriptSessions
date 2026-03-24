//Object :: Key-value pair
//functions(behaviour) - actions


//- named function 
// - anonymous functions
// - arrow functions

let user = {
    name: 'sahil',
    age: 30,
    devices: ['macbook', 'apple'],
    salary: 100,

    coding: function code() {
        console.log(`${this.name} is writing the code`);
    },

    print(ctc) {
        console.log('your ctc is:: ' + ctc);
        let totalSalry = ctc + this.salary;
        return totalSalry;
    },

    //for arrow function we need to write the object.property name

    /**
     * 
     * @param {number} speed 
     */
    walking: (speed) => {
        console.log(`${user.name} is driving the carat ${speed}`);



    },


    /**
     * 
     * @param {string} sportname 
     */
    playing: function (sportname) {
        console.log(`${this.name} like ${sportname}`);

        this.walking(20);

    }




}

console.log(user.name);
console.log(user['age']);
user.coding();
let totalSal = user.print(200);
console.log('total salry is:: ' + totalSal);
user.walking('10');

user.playing('cricket');
