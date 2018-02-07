//INHERITANCE IN ES5
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.sayHello = function(){
    return 'Hello ' + this.firstName + ' ' + this.lastName;
}

function Student(firstName, lastName) {
    //to avoid code duplication we borrow it from Person with 'apply'
    Person.apply(this, arguments);
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

//INHERITANCE IN ES6 with 'extends' keyword
class Person2 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHello() {
        return `Hello ${this.firstName} ${this.lastName}`;
    }
}

class Student2 extends Person2 {
    constructor(firstName, lastName){
        //we use 'super' to borrow code from Person
        //super can only be used if a method by the same name is implemented in the parent class
        super(firstName, lastName);
    }
}

/*****  EXERCISES *****/
// 1 - Create a class for for a Vehicle. Each vehicle should have a make, model and year property.

// 2 - Add an instance method called start which returns the string "VROOM!"

// 3 - Add an instance method called toString which returns the string "The make, model, and year are" concatenated with the make, model and year property

/* Examples
    var vehicle = new Vehicle("Tractor", "John Deere", 1999)
    vehicle.toString() // 'The make, model, and year are Tractor John Deere 1999'
*/

// 4 - Create a class for a Car. Each object created from the Car function should also have a make, model, and year and a property called numWheels which should be 4.
//The Car prototype should inherit all of the methods from the Vehicle prototype

// 5 - Create a class for a Motorcycle. Each object created from the Motorcycle function should also have a make, model, and year and a property called numWheels which should be 2.
//The Motorcycle prototype should inherit all of the methods from the Vehicle prototype
class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start(){
        return `VROOM!`;
    }
    toString(){
        return `The make, model, and year are ${this.make} ${this.model} ${this.year}`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year, numWheels){
        super(...arguments);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year, numWheels){
        super(...arguments);
        this.numWheels = 2;
    }
}

const aveo = new Car('Chevrolet', 'Aveo', 2008);
const cbr = new Motorcycle('Honda', 'CBR1000', 1995);
console.log(aveo);
console.log(aveo.start());
console.log(cbr.toString());