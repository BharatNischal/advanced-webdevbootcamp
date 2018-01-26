/************************************************************/
/***********************INHERITANCE**************************/
/************************************************************/
//the passing of methods and properties from one class to another
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
Person.prototype.sayHi = function() {
    return `Hello ${this.firstName} ${this.lastName}`;
}

function Student(firstName, lastName) {
    return Person.apply(this, arguments);
}

//DON'T DO THIS !
//We this you are creating a reference to Person, and any change on Student will affect also Person!
// Student.prototype = Person.prototype;

/* OBJECT.CREATE */
//It will create a brand new object that will not affect the parent!
Student.prototype = Object.create(Person.prototype);//set the prototype to be an object created with another prototype
Student.prototype.constructor = Student; //here we reset the constructor property to Student

Student.prototype.status = function() {
    return 'I am a student!';
}
const leia = new Person('Leia', 'Organa');
console.log(leia.status); //undefined
const maul = new Student('Darth', 'Maul');
console.log(maul.status()); //I am a student!

/* EXERCISES */
// 1 - Create a constructor function for a Vehicle. Each vehicle should have a make, model and year property.
function Vehicle(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
}
// 2 - Add a function to the Vehicle prototype called start which returns the string "VROOM!"
Vehicle.prototype.start = function() {
    return 'VROOM!';
}
// 3 - Add a function to the Vehicle prototype called toString which returns the string "The make, model, and year are" concatenated with the make, model and year property
Vehicle.prototype.toString = function() {
    return `The make, model, and year are ${this.make} ${this.model} ${this.year}`;
}
/* Examples
    var vehicle = new Vehicle("Tractor", "John Deere", 1999)
    vehicle.toString() // 'The make, model, and year are Tractor John Deere 1999'
*/

// 4 - Create a constructor function for a Car.
//Each object created from the Car function should also have a make, model, and year and a property called numWheels which should be 4.
//The Car prototype should inherit all of the methods from the Vehicle prototype
function Car(make, model, year) {
    Vehicle.apply(this, arguments);
    this.numWheels = 4;
}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
// 5 - Create a constructor function for a Motorcycle. Each object created from the Motorcycle function should also have a make, model, and year
//and a property called numWheels which should be 2. The Motorcycle prototype should inherit all of the methods from the Vehicle prototype
function Motorcycle(make, model, year){
    Vehicle.apply(this, arguments);
    this.numWheels = 2;
}
Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;