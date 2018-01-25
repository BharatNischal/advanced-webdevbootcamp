//Object Creation
/********************************************/
        /* CONSTRUCTOR FUNCTIONS */
/********************************************/
function House(bedrooms, bathrooms, numSqft){
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.numSqft = numSqft;
}

const firstHouse = House(2, 2, 1000);
console.log(firstHouse); //undefined ....it missed the keyword "new"! So "this" is undefined!
const secondHouse = new House(2, 2, 1000);
console.log(secondHouse); //House {bedrooms: 2, bathrooms: 2, numSqft: 1000}

function Dog(name, age) {
    this.name = name;
    this.age = age;
    this.bark = function() {
        console.log(`${this.name} just barked!`);
    };
}

const fuffy = new Dog('Fuffy', 5);
console.log(fuffy.name);//Fuffy
console.log(fuffy.age);//5
console.log(fuffy.bark());//Fuffy just barked!



