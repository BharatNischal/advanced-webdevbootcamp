/*****************************************************/
            /* MULTIPLE CONSTRUCTORS */
/*****************************************************/
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = 4;
}

const panda = new Car('Fiat', 'Panda', 1994);
// console.log(panda.make);
// console.log(panda.model);
// console.log(panda.year);
// console.log(panda.numWheels);

function Motorcycle(make, model, year) {
    //using call to keep our code DRY
    Car.call(this, make, model, year);
    this.numWheels = 2;
}

const rgb1000 = new Motorcycle('Honda', 'RGB1000', 1995);
// console.log(rgb1000.make);
// console.log(rgb1000.model);
// console.log(rgb1000.year);
// console.log(rgb1000.numWheels);

function Bicycle(make, model, year) {
    //using apply to keep our code DRY
    Car.apply(this, arguments);
    this.numWheels = 2;
}

const rockrider = new Bicycle('Decathlon', 'RockRider', 2012);
// console.log(rockrider.make);
// console.log(rockrider.model);
// console.log(rockrider.year);
// console.log(rockrider.numWheels);