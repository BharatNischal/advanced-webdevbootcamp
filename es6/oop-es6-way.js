//CLASS
//Note: class keyword creates a constant that CAN NOT be redeclared

//ES5 style to mimic a class (it didn't exist before ES6 in JS)
//CONSTRUCTOR FUNCTIONS

function Teacher(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

//ES5 way to add methods to object
Teacher.prototype.sayHello = function() {
    return 'Hello ' + this.firstName + ' ' + this.lastName;
}

const Mike = new Teacher('Mike', 'Tyson');

//ES6 style with class keyword
class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    //ES6 way to add methods to an object
    sayHello(){
        return `Hello ${this.firstName} ${this.lastName}`;
    }
    //ES6 static methods
    static isStudent(obj){
        return obj.constructor === Student;
    }
}

const Pippo = new Student ('Pippo', 'Franco');

/********* EXERCISES ***********/
// 1 - Create a class for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber.
/* 2 - Add an instance method called multiplyFavoriteNumber that accepts one parameter and returns the product of
the parameter multiplied with the favoriteNumber property on a person object.

Examples:
    var person = new Person("Elie", "Schoppik", "purple", 34)
    person.multiplyFavoriteNumber(10) // 340

*/
class Person {
    constructor(firstName, lastName, favoriteColor, favoriteNumber){
        this.firstName = firstName;
        this.lastName = lastName;
        this.favoriteColor = favoriteColor;
        this.favoriteNumber = favoriteNumber;
    }
    multiplyFavoriteNumber(n){
        return n * this.favoriteNumber;
    }
}

const person = new Person('Giulio', 'Cesare', 'red', 15);
console.log(person);
console.log(person.multiplyFavoriteNumber(10));

//another one
class Dog{
    constructor(name, age, food){
        this.name = name;
        this.age = age;
        this.food = food;
    }
    favFood(){
        return `${this.name} favorite food is ${this.food}`;
    }
}

const darth = new Dog('Darth', 5, 'Salmon');
console.log(darth);
console.log(darth.favFood());