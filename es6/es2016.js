//EXPONENTIATION OPERATOR
//ES2015
var exponentialNum = Math.pow(2,4);

console.log(exponentialNum);
//ES2016 ** instead of pow()
exponentialNum = 2**4;

console.log(exponentialNum);

//Another example
var nums = [1,2,3,4,5];
var total = 2;

for (let i = 0; i < nums.length; i++) {
    console.log(total **= nums[i]);
}

//[].includes
console.log(nums.includes(3)); //true
console.log(nums.includes(1)); //true
console.log(nums.includes(33)); //false

//padStart
var str = "awesome";
console.log(str.padStart(10));
console.log(str.padStart(10, '!'));//!!!awesome

//padEnd
console.log(str.padEnd(10, '!'));//awesome!!!
